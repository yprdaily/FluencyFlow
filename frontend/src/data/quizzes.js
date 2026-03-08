/**
 * Quiz Data - クイズ問題（手動作成 + 動的生成）
 */
import { getLessonById, getAllLessons } from './lessons.js';
import { shuffleArray } from '../utils/helpers.js';

// ===================================================================
// 手動作成クイズ（確実に正しい解答を保証するベースライン）
// ===================================================================
const manualQuizzes = {
    greetings: [
        { type: 'choice', question: '「こんにちは」は英語で何と言いますか？', options: ['Hello', 'Goodbye', 'Thank you', 'Sorry'], answer: 0, explanation: 'Hello = こんにちは。最も基本的な挨拶です。' },
        { type: 'choice', question: '"How are you?" の適切な返答は？', options: ["I'm fine, thank you.", "I'm sorry.", "Goodbye!", "You're welcome."], answer: 0, explanation: '"I\'m fine, thank you." が一般的な返答です。' },
        { type: 'choice', question: '「はじめまして」に最も近い表現は？', options: ['Nice to meet you!', 'See you later!', 'How are you?', "I'm fine."], answer: 0, explanation: 'Nice to meet you! = はじめまして！初対面で使います。' },
        { type: 'fill', question: '空欄を埋めてください: "My ___ is Tanaka."', answer: 'name', hint: '名前', explanation: 'My name is ~ = 私の名前は〜です' },
        { type: 'choice', question: '"See you later!" はどんな場面で使いますか？', options: ['別れる時', '初めて会った時', '注文する時', '謝る時'], answer: 0, explanation: 'See you later! = また後でね！別れ際の表現です。' },
        { type: 'choice', question: '"How\'s it going?" はどんな挨拶ですか？', options: ['カジュアルな挨拶', 'フォーマルな挨拶', 'お別れの挨拶', 'お詫びの表現'], answer: 0, explanation: '"How\'s it going?" は "How are you?" のカジュアル版です。' },
        { type: 'fill', question: '"良い一日を！" = "Have a nice ___!"', answer: 'day', hint: '日', explanation: 'Have a nice day! = 別れ際の定番フレーズ' },
    ],
    'basic-grammar': [
        { type: 'fill', question: '"彼女は先生です" = "She ___ a teacher."', answer: 'is', hint: 'be動詞', explanation: 'She is = 彼女は〜です (be動詞の三人称単数)' },
        { type: 'choice', question: '"Do you speak English?" の意味は？', options: ['英語を話しますか？', '英語は難しいですか？', '英語を勉強していますか？', '英語が好きですか？'], answer: 0, explanation: 'Do you speak ~? = 〜を話しますか？' },
        { type: 'fill', question: '"わかりません" = "I ___ understand."', answer: "don't", hint: '否定', explanation: "I don't + 動詞 = 〜しません（否定文）" },
        { type: 'choice', question: '"Can you help me?" の適切な返答は？', options: ['Sure! What do you need?', "I don't understand.", "Nice to meet you.", "See you later!"], answer: 0, explanation: 'Sure! = もちろん！依頼に対する承諾の返事です。' },
        { type: 'choice', question: '"I want to go shopping." の正しい日本語は？', options: ['買い物に行きたいです', '散歩に行きたいです', '家に帰りたいです', '食事に行きたいです'], answer: 0, explanation: 'go shopping = 買い物に行く' },
        { type: 'fill', question: '"手伝ってもらえますか？" = "___ you help me?"', answer: 'Can', hint: '助動詞', explanation: 'Can you ~? = 〜してもらえますか？（依頼の表現）' },
    ],
    'numbers-time': [
        { type: 'fill', question: '"これはいくらですか？" = "How ___ is this?"', answer: 'much', hint: 'いくら', explanation: 'How much = いくら（値段を聞く時）' },
        { type: 'choice', question: '"twenty-five dollars" はいくらですか？', options: ['25ドル', '15ドル', '35ドル', '52ドル'], answer: 0, explanation: 'twenty-five = 25' },
    ],
    directions: [
        { type: 'fill', question: '"まっすぐ行って左に曲がって" = "Go straight and turn ___."', answer: 'left', hint: '左', explanation: 'turn left = 左に曲がる, turn right = 右に曲がる' },
        { type: 'choice', question: '"Is it far from here?" の意味は？', options: ['ここから遠いですか？', 'ここはどこですか？', 'ここに泊まれますか？', 'ここで降ります'], answer: 0, explanation: 'far from here = ここから遠い' },
    ],
    airport: [
        { type: 'choice', question: '入国審査で「観光で来ました」は何と言いますか？', options: ["I'm here for sightseeing.", "I'm here for business.", "I live here.", "I'm just passing through."], answer: 0, explanation: 'sightseeing = 観光。入国審査で必ず聞かれる質問です。' },
        { type: 'fill', question: '"7日間滞在します" = "I\'ll be staying for ___ days."', answer: 'seven', hint: '7', explanation: 'I\'ll be staying for ~ days = 〜日間滞在する予定です' },
        { type: 'choice', question: '"baggage claim" の意味は？', options: ['手荷物受取所', '搭乗口', '税関', '出口'], answer: 0, explanation: 'baggage claim = 手荷物受取所。空港で荷物を受け取る場所です。' },
        { type: 'choice', question: '"I have nothing to declare." はいつ使いますか？', options: ['税関で申告するものがない時', '手荷物を受け取る時', 'パスポートを見せる時', '座席を選ぶ時'], answer: 0, explanation: 'declare = 申告する。税関で使うフレーズです。' },
    ],
    hotel: [
        { type: 'choice', question: '"チェックインをお願いします" は？', options: ["I'd like to check in, please.", "I'd like to check out.", "I have a question.", "Can I have a room?"], answer: 0, explanation: "I'd like to ~ = 〜をしたいのですが（丁寧な依頼表現）" },
        { type: 'fill', question: '"田中で予約しています" = "I have a ___ under Tanaka."', answer: 'reservation', hint: '予約', explanation: 'reservation under ~ = 〜名義の予約' },
        { type: 'choice', question: '"Is breakfast included?" の意味は？', options: ['朝食は含まれていますか？', '朝食は何時ですか？', '朝食を追加できますか？', '朝食はどこですか？'], answer: 0, explanation: 'included = 含まれている' },
        { type: 'fill', question: '"チェックアウトは何時ですか？" = "What time is ___?"', answer: 'checkout', hint: 'チェックアウト', explanation: 'checkout = チェックアウト' },
    ],
    restaurant: [
        { type: 'choice', question: '"おすすめは何ですか？" は英語で？', options: ['What do you recommend?', 'What is this?', 'How much is it?', 'Is it good?'], answer: 0, explanation: 'recommend = おすすめする。レストランで非常に使えるフレーズです。' },
        { type: 'fill', question: '"2名席をお願いします" = "A table for ___, please."', answer: 'two', hint: '2', explanation: 'A table for ~ = 〜名席' },
        { type: 'choice', question: '"I\'m allergic to nuts" の目的は？', options: ['アレルギーを伝えるため', '注文するため', 'チップを払うため', '感想を言うため'], answer: 0, explanation: 'allergic to ~ = 〜にアレルギーがある。安全のため必ず伝えましょう！' },
        { type: 'choice', question: '"Could I have the check, please?" はいつ使いますか？', options: ['お会計の時', '注文の時', '入店の時', '感想を言う時'], answer: 0, explanation: 'the check = お会計（アメリカ英語）。イギリス英語では the bill。' },
    ],
    shopping: [
        { type: 'choice', question: '店員に「見ているだけです」と伝えるには？', options: ["I'm just looking, thanks.", "I want to buy this.", "How much is it?", "Can I try this on?"], answer: 0, explanation: "I'm just looking = 見ているだけです。店員に声をかけられた時の定番フレーズ。" },
        { type: 'fill', question: '"試着してもいいですか？" = "Can I ___ this on?"', answer: 'try', hint: '試す', explanation: 'try on = 試着する' },
    ],
    transport: [
        { type: 'fill', question: '"運賃はいくらですか？" = "How much is the ___?"', answer: 'fare', hint: '運賃', explanation: 'fare = 運賃（バス・タクシーなど）' },
    ],
    emergency: [
        { type: 'choice', question: '緊急時に助けを求めるフレーズは？', options: ['I need help!', 'I need a menu.', 'I need a taxi.', 'I need a room.'], answer: 0, explanation: 'I need help! = 助けてください！緊急時の最重要フレーズ。' },
    ],
    'hawaiian-basics': [
        { type: 'choice', question: '"Mahalo" の意味は？', options: ['ありがとう', 'こんにちは', 'さようなら', '愛'], answer: 0, explanation: 'Mahalo = Thank you。ハワイではお店でもよく使われます。' },
        { type: 'choice', question: '"Ohana" は何を意味しますか？', options: ['家族', '友達', '海', '花'], answer: 0, explanation: 'Ohana = Family。血縁に限らず大切な人々を指します。' },
        { type: 'fill', question: 'ハワイでの歓迎の言葉: "E komo ___!"', answer: 'mai', hint: 'ようこそ', explanation: 'E komo mai = Welcome（ようこそ）' },
        { type: 'choice', question: '"Lei" とは何ですか？', options: ['花の首飾り', 'ハワイの踊り', 'ハワイの食べ物', 'ハワイの楽器'], answer: 0, explanation: 'Lei = 花の首飾り。歓迎の印として贈られます。' },
    ],
    pidgin: [
        { type: 'choice', question: '"Howzit!" の意味は？', options: ['調子どう？', 'ありがとう', 'さようなら', '助けて'], answer: 0, explanation: "Howzit = How's it going? のハワイピジン版。最もよく使われるカジュアル挨拶。" },
        { type: 'choice', question: '"Broke da mouth" はどんな時に使いますか？', options: ['食べ物が美味しい時', '口を怪我した時', '驚いた時', '怒った時'], answer: 0, explanation: '直訳は「口が壊れる」＝めちゃくちゃ美味い！という最上級の褒め言葉。' },
        { type: 'fill', question: '"OK! / Sure!" のハワイスラングは "___!"', answer: 'Shoots', hint: 'S...', explanation: 'Shoots = OK, Sure, Got it。日常的に使われる同意表現。' },
        { type: 'choice', question: '"Pau hana" の意味は？', options: ['仕事終わり', '朝ごはん', 'ビーチ', '買い物'], answer: 0, explanation: 'Pau = 終わり, Hana = 仕事。ハッピーアワーの時間帯に "Pau hana time!" と言います。' },
        { type: 'choice', question: '"Da kine" はどう使いますか？', options: ['名前が出てこない物を指す万能語', '挨拶の言葉', '食べ物の名前', '海の生き物'], answer: 0, explanation: 'Da kine = "あれ" "あのやつ"。何にでも使える便利なピジン英語。' },
    ],
    'local-food': [
        { type: 'choice', question: '"Poke bowl" はどんな料理ですか？', options: ['生の魚を使った丼', '焼き魚定食', 'スープ料理', 'サンドイッチ'], answer: 0, explanation: 'poke（ポケ）= ハワイ語で「切り身」。新鮮な生魚をご飯に乗せた丼。' },
        { type: 'choice', question: 'ハワイで正しい言い方はどちらですか？', options: ['Shave ice', 'Shaved ice', 'Ice shave', 'Icy shave'], answer: 0, explanation: 'ハワイでは "shave ice"（dなし）が現地の正しい言い方。"shaved ice" と言うと観光客だとバレます！' },
        { type: 'fill', question: '"プレートランチをください" = "Can I get a ___ lunch?"', answer: 'plate', hint: 'お皿', explanation: 'plate lunch = ハワイ式弁当。2スクープライス+マカロニサラダ+メインおかず。' },
        { type: 'choice', question: '"Loco Moco" の構成は？', options: ['ご飯+ハンバーグ+卵+グレイビーソース', 'ご飯+魚+野菜', 'パン+肉+チーズ', '麺+スープ+野菜'], answer: 0, explanation: 'Loco Moco は日系人が考案したハワイのソウルフード。' },
    ],
    'beach-activities': [
        { type: 'fill', question: '"サーフボードのレンタルはいくら？" = "How much is it to ___ a surfboard?"', answer: 'rent', hint: '借りる', explanation: 'rent = 借りる、レンタルする' },
        { type: 'choice', question: 'ハワイでウミガメは何と呼ばれますか？', options: ['Honu (ホヌ)', 'Mano (マノ)', 'Naia (ナイア)', 'Hae (ハエ)'], answer: 0, explanation: 'Honu = ウミガメ。ハワイでは神聖な生き物で、触ることは法律で禁止されています。' },
    ],
    'tipping-culture': [
        { type: 'choice', question: 'レストランでの一般的なチップの割合は？', options: ['15-20%', '5-10%', '25-30%', 'チップ不要'], answer: 0, explanation: 'アメリカのレストランではチップ15-20%が標準。良いサービスには20%が目安。' },
        { type: 'fill', question: '"お釣りはいりません" = "___ the change."', answer: 'Keep', hint: '保つ', explanation: 'Keep the change = お釣りはいりません。チップとして渡す時の定番フレーズ。' },
    ],
};


// ===================================================================
// 動的クイズ生成エンジン
// ===================================================================

/**
 * レッスンのフレーズから問題を自動生成
 */
function generateDynamicQuizzes(lessonId) {
    const lesson = getLessonById(lessonId);
    if (!lesson || !lesson.phrases) return [];

    const phrases = lesson.phrases;
    const generated = [];

    // --- 日→英: 日本語を見て英語を選ぶ ---
    for (const phrase of phrases) {
        const wrongOptions = getRandomWrongPhrases(phrase, phrases, 'en', 3);
        if (wrongOptions.length >= 3) {
            generated.push({
                type: 'choice',
                question: `「${phrase.ja}」を英語で言うと？`,
                options: [phrase.en, ...wrongOptions],
                answer: 0,
                explanation: `${phrase.en} = ${phrase.ja}`,
                _dynamic: true
            });
        }
    }

    // --- 英→日: 英語を見て日本語を選ぶ ---
    for (const phrase of phrases) {
        const wrongOptions = getRandomWrongPhrases(phrase, phrases, 'ja', 3);
        if (wrongOptions.length >= 3) {
            generated.push({
                type: 'choice',
                question: `"${phrase.en}" の日本語の意味は？`,
                options: [phrase.ja, ...wrongOptions],
                answer: 0,
                explanation: `${phrase.en} = ${phrase.ja}`,
                _dynamic: true
            });
        }
    }

    // --- リスニング: 音声を聞いて正しい文を選ぶ ---
    for (const phrase of phrases) {
        const wrongOptions = getRandomWrongPhrases(phrase, phrases, 'en', 3);
        if (wrongOptions.length >= 3) {
            generated.push({
                type: 'listen',
                phrase: phrase.en,
                question: '聞こえた英語はどれですか？',
                options: [phrase.en, ...wrongOptions],
                answer: 0,
                explanation: `正解: "${phrase.en}" (${phrase.ja})`,
                _dynamic: true
            });
        }
    }

    // --- リスニング意味: 音声を聞いて意味を選ぶ ---
    for (const phrase of phrases) {
        const wrongOptions = getRandomWrongPhrases(phrase, phrases, 'ja', 3);
        if (wrongOptions.length >= 3) {
            generated.push({
                type: 'listen',
                phrase: phrase.en,
                question: '聞こえたフレーズの意味は？',
                options: [phrase.ja, ...wrongOptions],
                answer: 0,
                explanation: `"${phrase.en}" = ${phrase.ja}`,
                _dynamic: true
            });
        }
    }

    // --- 穴埋め: 重要な単語を抜く ---
    for (const phrase of phrases) {
        const words = phrase.en.split(' ');
        if (words.length >= 3) {
            // 重要そうな単語を選ぶ (冠詞・前置詞以外)
            const skipWords = new Set(['a', 'an', 'the', 'is', 'am', 'are', 'to', 'in', 'on', 'at', 'for', 'of', 'i', 'you', 'it']);
            const candidates = words.filter((w, i) => !skipWords.has(w.toLowerCase().replace(/[^a-z']/g, '')) && w.length > 2);

            if (candidates.length > 0) {
                const targetWord = candidates[Math.floor(Math.random() * candidates.length)];
                const cleanTarget = targetWord.replace(/[.,!?;:]/g, '');
                const blanked = phrase.en.replace(targetWord, '___');

                generated.push({
                    type: 'fill',
                    question: `空欄を埋めてください: "${blanked}"`,
                    answer: cleanTarget.toLowerCase(),
                    hint: phrase.ja,
                    explanation: `${phrase.en} = ${phrase.ja}`,
                    _dynamic: true
                });
            }
        }
    }

    // --- 語順並べ替え ---
    for (const phrase of phrases) {
        const words = phrase.en.replace(/[.,!?;:]/g, '').split(' ');
        if (words.length >= 3 && words.length <= 8) {
            generated.push({
                type: 'order',
                question: `正しい語順に並べ替えてください: (${phrase.ja})`,
                words: words,
                answer: phrase.en.replace(/[.,!?;:]/g, ''),
                explanation: `${phrase.en} = ${phrase.ja}`,
                _dynamic: true
            });
        }
    }

    return generated;
}

/**
 * 同レッスン内から不正解選択肢を取得
 */
function getRandomWrongPhrases(correct, allPhrases, field, count) {
    const others = allPhrases.filter(p => p[field] !== correct[field]);
    if (others.length < count) {
        // 足りない場合は他レッスンからも取得
        const allLessons = getAllLessons();
        for (const lesson of allLessons) {
            if (lesson.phrases) {
                const morePhrases = lesson.phrases.filter(p => p[field] !== correct[field] && !others.some(o => o[field] === p[field]));
                others.push(...morePhrases);
            }
        }
    }
    return shuffleArray(others).slice(0, count).map(p => p[field]);
}


// ===================================================================
// メインAPI: シャッフル済みクイズを返す
// ===================================================================

/**
 * レッスン用のクイズを取得（手動+動的生成、シャッフル済み）
 * @param {string} lessonId
 * @param {number} maxQuestions - 最大問題数（デフォルト10）
 * @returns {Array} シャッフル済みクイズ配列
 */
export function getQuizByLessonId(lessonId, maxQuestions = 10) {
    const manual = manualQuizzes[lessonId] || [];
    const dynamic = generateDynamicQuizzes(lessonId);

    // 手動問題を優先し、残りを動的問題で埋める
    let pool = [...manual, ...dynamic];

    // 問題全体をシャッフル
    pool = shuffleArray(pool);

    // 最大数に制限
    pool = pool.slice(0, maxQuestions);

    // 各問題の選択肢もシャッフル（正解インデックスを追跡）
    pool = pool.map(q => shuffleQuizOptions(q));

    return pool;
}

/**
 * 選択肢をシャッフルし、正解インデックスを更新
 */
function shuffleQuizOptions(quiz) {
    if (quiz.type !== 'choice' && quiz.type !== 'listen') return quiz;
    if (!quiz.options || quiz.options.length === 0) return quiz;

    const correctAnswer = quiz.options[quiz.answer];

    // 選択肢をシャッフル
    const shuffled = shuffleArray([...quiz.options]);

    // 正解の新しいインデックスを見つける
    const newAnswer = shuffled.indexOf(correctAnswer);

    return {
        ...quiz,
        options: shuffled,
        answer: newAnswer
    };
}
