/**
 * Lessons Data - 学習コンテンツ
 */

export const stages = [
    {
        id: 'basics',
        title: '基礎復習',
        subtitle: '中学英語を思い出そう',
        icon: '📖',
        color: '#0891b2',
        lessons: [
            {
                id: 'greetings',
                title: '挨拶・自己紹介',
                icon: '👋',
                xpReward: 20,
                phrases: [
                    { en: "Hello! How are you?", ja: "こんにちは！元気ですか？", notes: "最も基本的な挨拶" },
                    { en: "I'm fine, thank you. And you?", ja: "元気です、ありがとう。あなたは？", notes: "" },
                    { en: "Nice to meet you!", ja: "はじめまして！", notes: "初対面の時に使う" },
                    { en: "My name is...", ja: "私の名前は…です", notes: "自己紹介の基本" },
                    { en: "Where are you from?", ja: "どちらのご出身ですか？", notes: "" },
                    { en: "I'm from Japan.", ja: "日本から来ました。", notes: "" },
                    { en: "It's nice to meet you too!", ja: "こちらこそ、はじめまして！", notes: "" },
                    { en: "How's it going?", ja: "調子はどう？", notes: "カジュアルな挨拶" },
                    { en: "See you later!", ja: "また後でね！", notes: "" },
                    { en: "Have a nice day!", ja: "良い一日を！", notes: "別れ際の定番フレーズ" },
                ]
            },
            {
                id: 'basic-grammar',
                title: '基本文法',
                icon: '📝',
                xpReward: 25,
                phrases: [
                    { en: "I like coffee.", ja: "コーヒーが好きです。", notes: "一般動詞の基本" },
                    { en: "She is a teacher.", ja: "彼女は先生です。", notes: "be動詞" },
                    { en: "Do you speak English?", ja: "英語を話しますか？", notes: "疑問文" },
                    { en: "I don't understand.", ja: "わかりません。", notes: "否定文" },
                    { en: "Can you help me?", ja: "手伝ってもらえますか？", notes: "助動詞 can" },
                    { en: "I want to go shopping.", ja: "買い物に行きたいです。", notes: "want to + 動詞" },
                    { en: "There is a store near here.", ja: "この近くにお店があります。", notes: "There is 構文" },
                    { en: "What time is it?", ja: "何時ですか？", notes: "疑問詞 what" },
                    { en: "I have two children.", ja: "子供が2人います。", notes: "have の使い方" },
                    { en: "This is very beautiful.", ja: "これはとても美しいです。", notes: "形容詞" },
                ]
            },
            {
                id: 'numbers-time',
                title: '数字・時間・日付',
                icon: '🔢',
                xpReward: 20,
                phrases: [
                    { en: "How much is this?", ja: "これはいくらですか？", notes: "値段を聞く" },
                    { en: "It's twenty-five dollars.", ja: "25ドルです。", notes: "" },
                    { en: "What time does it open?", ja: "何時に開きますか？", notes: "" },
                    { en: "It opens at nine o'clock.", ja: "9時に開きます。", notes: "" },
                    { en: "I'll stay for three nights.", ja: "3泊します。", notes: "" },
                    { en: "My flight is at 2:30 PM.", ja: "フライトは午後2時30分です。", notes: "" },
                    { en: "Today is March 15th.", ja: "今日は3月15日です。", notes: "" },
                    { en: "I need two tickets, please.", ja: "チケットを2枚お願いします。", notes: "" },
                ]
            },
            {
                id: 'directions',
                title: '道案内の基本',
                icon: '🗺️',
                xpReward: 20,
                phrases: [
                    { en: "Excuse me, where is the beach?", ja: "すみません、ビーチはどこですか？", notes: "" },
                    { en: "Go straight and turn left.", ja: "まっすぐ行って左に曲がってください。", notes: "" },
                    { en: "It's about a 10-minute walk.", ja: "歩いて約10分です。", notes: "" },
                    { en: "Is it far from here?", ja: "ここから遠いですか？", notes: "" },
                    { en: "Can you show me on the map?", ja: "地図で見せてもらえますか？", notes: "" },
                    { en: "It's on your right side.", ja: "右側にあります。", notes: "" },
                    { en: "I'm looking for Waikiki Beach.", ja: "ワイキキビーチを探しています。", notes: "" },
                    { en: "How do I get to the hotel?", ja: "ホテルへはどう行けばいいですか？", notes: "" },
                ]
            }
        ]
    },
    {
        id: 'travel',
        title: '旅行英会話',
        subtitle: 'シーン別の実践フレーズ',
        icon: '✈️',
        color: '#f97316',
        lessons: [
            {
                id: 'airport',
                title: '空港・入国審査',
                icon: '🛫',
                xpReward: 30,
                phrases: [
                    { en: "I'm here for sightseeing.", ja: "観光で来ました。", notes: "入国審査で必ず聞かれる" },
                    { en: "I'll be staying for seven days.", ja: "7日間滞在します。", notes: "" },
                    { en: "I'm staying at the Hilton Hotel.", ja: "ヒルトンホテルに泊まります。", notes: "" },
                    { en: "Where is the baggage claim?", ja: "手荷物受取所はどこですか？", notes: "" },
                    { en: "I have nothing to declare.", ja: "申告するものはありません。", notes: "税関で" },
                    { en: "Where can I catch a taxi?", ja: "タクシーはどこで乗れますか？", notes: "" },
                    { en: "My luggage is missing.", ja: "荷物が見当たりません。", notes: "トラブル時" },
                    { en: "Is there a shuttle bus to Waikiki?", ja: "ワイキキ行きのシャトルバスはありますか？", notes: "" },
                ]
            },
            {
                id: 'hotel',
                title: 'ホテル',
                icon: '🏨',
                xpReward: 30,
                phrases: [
                    { en: "I'd like to check in, please.", ja: "チェックインをお願いします。", notes: "" },
                    { en: "I have a reservation under Tanaka.", ja: "田中で予約しています。", notes: "" },
                    { en: "Could I get a room with an ocean view?", ja: "オーシャンビューの部屋はありますか？", notes: "" },
                    { en: "What time is checkout?", ja: "チェックアウトは何時ですか？", notes: "" },
                    { en: "Can I have extra towels, please?", ja: "タオルを追加でもらえますか？", notes: "" },
                    { en: "The air conditioning isn't working.", ja: "エアコンが動きません。", notes: "トラブル" },
                    { en: "Is breakfast included?", ja: "朝食は含まれていますか？", notes: "" },
                    { en: "Could you keep my luggage until checkout?", ja: "チェックアウトまで荷物を預かってもらえますか？", notes: "" },
                    { en: "Where is the pool?", ja: "プールはどこですか？", notes: "" },
                    { en: "I'd like a late checkout, if possible.", ja: "できればレイトチェックアウトをお願いしたいのですが。", notes: "" },
                ]
            },
            {
                id: 'restaurant',
                title: 'レストラン・カフェ',
                icon: '🍽️',
                xpReward: 30,
                phrases: [
                    { en: "A table for two, please.", ja: "2名席をお願いします。", notes: "" },
                    { en: "Can I see the menu, please?", ja: "メニューを見せてもらえますか？", notes: "" },
                    { en: "What do you recommend?", ja: "おすすめは何ですか？", notes: "" },
                    { en: "I'll have the grilled fish, please.", ja: "焼き魚をお願いします。", notes: "" },
                    { en: "Could I have the check, please?", ja: "お会計をお願いします。", notes: "" },
                    { en: "Is this dish spicy?", ja: "この料理は辛いですか？", notes: "" },
                    { en: "I'm allergic to nuts.", ja: "ナッツアレルギーがあります。", notes: "重要！" },
                    { en: "Can I pay with a credit card?", ja: "クレジットカードで払えますか？", notes: "" },
                    { en: "This is delicious!", ja: "これ、おいしい！", notes: "感想を伝えよう" },
                    { en: "Could we have some water, please?", ja: "お水をいただけますか？", notes: "" },
                ]
            },
            {
                id: 'shopping',
                title: 'ショッピング',
                icon: '🛍️',
                xpReward: 25,
                phrases: [
                    { en: "I'm just looking, thanks.", ja: "見ているだけです、ありがとう。", notes: "店員に声をかけられた時" },
                    { en: "Do you have this in a different size?", ja: "別のサイズはありますか？", notes: "" },
                    { en: "How much is this?", ja: "これはいくらですか？", notes: "" },
                    { en: "Can I try this on?", ja: "試着してもいいですか？", notes: "" },
                    { en: "I'll take this one.", ja: "これをください。", notes: "" },
                    { en: "Do you have any discounts?", ja: "割引はありますか？", notes: "" },
                    { en: "Is this tax-free?", ja: "これは免税ですか？", notes: "" },
                    { en: "Can I get a bag, please?", ja: "袋をもらえますか？", notes: "" },
                ]
            },
            {
                id: 'transport',
                title: '交通機関',
                icon: '🚌',
                xpReward: 25,
                phrases: [
                    { en: "How do I get to Waikiki from here?", ja: "ここからワイキキへはどう行けばいいですか？", notes: "" },
                    { en: "Which bus goes to Diamond Head?", ja: "ダイヤモンドヘッド行きのバスはどれですか？", notes: "" },
                    { en: "Could you take me to this address?", ja: "この住所まで連れて行ってもらえますか？", notes: "タクシーで" },
                    { en: "How much is the fare?", ja: "運賃はいくらですか？", notes: "" },
                    { en: "Please stop here.", ja: "ここで止まってください。", notes: "" },
                    { en: "I'd like to rent a car.", ja: "レンタカーを借りたいです。", notes: "" },
                    { en: "Where is the nearest bus stop?", ja: "一番近いバス停はどこですか？", notes: "" },
                    { en: "Keep the change.", ja: "お釣りはいりません。", notes: "チップとして" },
                ]
            },
            {
                id: 'emergency',
                title: '緊急時の表現',
                icon: '🆘',
                xpReward: 30,
                phrases: [
                    { en: "I need help!", ja: "助けてください！", notes: "緊急時" },
                    { en: "Please call an ambulance.", ja: "救急車を呼んでください。", notes: "" },
                    { en: "I lost my wallet.", ja: "財布をなくしました。", notes: "" },
                    { en: "I don't feel well.", ja: "気分が悪いです。", notes: "" },
                    { en: "Where is the nearest hospital?", ja: "一番近い病院はどこですか？", notes: "" },
                    { en: "I need to see a doctor.", ja: "医者に診てもらう必要があります。", notes: "" },
                    { en: "Can you call the police?", ja: "警察を呼んでもらえますか？", notes: "" },
                    { en: "I have travel insurance.", ja: "旅行保険に入っています。", notes: "" },
                    { en: "I'm allergic to...", ja: "…にアレルギーがあります。", notes: "" },
                    { en: "My passport was stolen.", ja: "パスポートを盗まれました。", notes: "" },
                ]
            }
        ]
    },
    {
        id: 'hawaii',
        title: 'ハワイ特化',
        subtitle: '現地の言葉と文化',
        icon: '🌴',
        color: '#10b981',
        lessons: [
            {
                id: 'hawaiian-basics',
                title: 'ハワイアン語の基本',
                icon: '🌺',
                xpReward: 25,
                phrases: [
                    { en: "Aloha!", ja: "こんにちは！/ さようなら！/ 愛", notes: "ハワイ語で最も有名な言葉。挨拶・別れ・愛情全てに使える" },
                    { en: "Mahalo!", ja: "ありがとう！", notes: "感謝を表す。Mahalo nui loa = 本当にありがとう" },
                    { en: "Ohana means family.", ja: "オハナは家族を意味します。", notes: "血縁に限らず大切な人々" },
                    { en: "Aloha spirit", ja: "アロハ精神（思いやり・愛・調和）", notes: "ハワイの基本的な価値観" },
                    { en: "Welcome! E komo mai!", ja: "ようこそ！", notes: "お店やホテルでよく見かける" },
                    { en: "The Hawaiian word for beach is kahakai.", ja: "ハワイ語でビーチはカハカイと言います。", notes: "" },
                    { en: "Hula is a traditional Hawaiian dance.", ja: "フラはハワイの伝統的な踊りです。", notes: "" },
                    { en: "Lei is a garland of flowers.", ja: "レイは花の首飾りです。", notes: "歓迎の印として贈られる" },
                ]
            },
            {
                id: 'pidgin',
                title: 'ピジン英語・スラング',
                icon: '🤙',
                xpReward: 30,
                phrases: [
                    { en: "Howzit! (How is it? / How's it going?)", ja: "やあ！/ 調子どう？", notes: "ハワイで最も使われるカジュアル挨拶" },
                    { en: "Brah (Brother / Dude)", ja: "兄弟 / 友達", notes: "親しい人への呼びかけ" },
                    { en: "Da kine (The kind / That thing)", ja: "あれ / あのやつ", notes: "名前が出てこない時に何にでも使える万能語" },
                    { en: "No worries, brah!", ja: "心配するなよ、兄弟！", notes: "" },
                    { en: "Shoots! (OK! / Sure!)", ja: "了解！/ いいよ！", notes: "同意を表す" },
                    { en: "Broke da mouth! (Delicious!)", ja: "めちゃくちゃうまい！", notes: "食べ物が美味しい時" },
                    { en: "Talk story (Chat / Hang out)", ja: "おしゃべりする / 遊ぶ", notes: "" },
                    { en: "Pau (Finished / Done)", ja: "終わり / 完了", notes: "Pau hana = 仕事終わり" },
                    { en: "Shaka! 🤙", ja: "いいね！/ ありがとう！/ 元気？", notes: "親指と小指を立てるハンドサイン" },
                    { en: "Grindz (Food)", ja: "食べ物 / ご飯", notes: "Ono grindz = 美味しい食べ物" },
                ]
            },
            {
                id: 'local-food',
                title: 'ローカルフード注文',
                icon: '🍲',
                xpReward: 25,
                phrases: [
                    { en: "I'd like to try the poke bowl.", ja: "ポケ丼を食べてみたいです。", notes: "ハワイの代表的な料理" },
                    { en: "Can I get a loco moco, please?", ja: "ロコモコをお願いします。", notes: "ご飯+ハンバーグ+卵+グレイビーソース" },
                    { en: "I'll have a shave ice with mango flavor.", ja: "マンゴー味のシェイブアイスをください。", notes: "※'shaved ice'ではなく'shave ice'" },
                    { en: "What kind of fish is in the poke?", ja: "ポケにはどんな魚が入っていますか？", notes: "" },
                    { en: "Can I get a plate lunch?", ja: "プレートランチをください。", notes: "ハワイ式弁当：2スクープライス+マカロニサラダ+おかず" },
                    { en: "I'd like spam musubi.", ja: "スパムむすびをください。", notes: "ハワイのスパムおにぎり" },
                    { en: "Is the acai bowl fresh?", ja: "アサイーボウルは新鮮ですか？", notes: "" },
                    { en: "Can I get extra rice?", ja: "ご飯を大盛りにできますか？", notes: "" },
                ]
            },
            {
                id: 'beach-activities',
                title: 'ビーチ・アクティビティ',
                icon: '🏄',
                xpReward: 25,
                phrases: [
                    { en: "I'd like to take a surf lesson.", ja: "サーフィンのレッスンを受けたいです。", notes: "" },
                    { en: "How much is it to rent a surfboard?", ja: "サーフボードのレンタルはいくらですか？", notes: "" },
                    { en: "Is it safe to swim here?", ja: "ここで泳いでも安全ですか？", notes: "" },
                    { en: "Where can I go snorkeling?", ja: "シュノーケリングはどこでできますか？", notes: "" },
                    { en: "I want to see sea turtles!", ja: "ウミガメを見たい！", notes: "ハワイではhonu（ホヌ）と呼ぶ" },
                    { en: "Don't forget to put on sunscreen!", ja: "日焼け止めを忘れずに！", notes: "ハワイではリーフセーフが必須" },
                    { en: "The waves are really big today!", ja: "今日は波がすごく大きいね！", notes: "" },
                    { en: "I'd like to book a sunset cruise.", ja: "サンセットクルーズを予約したいです。", notes: "" },
                ]
            },
            {
                id: 'tipping-culture',
                title: 'チップ文化・マナー',
                icon: '💵',
                xpReward: 20,
                phrases: [
                    { en: "How much should I tip?", ja: "チップはいくら払えばいいですか？", notes: "レストラン: 15-20%, タクシー: 15%" },
                    { en: "The service was excellent!", ja: "サービスが素晴らしかったです！", notes: "" },
                    { en: "Is the tip included in the bill?", ja: "チップは会計に含まれていますか？", notes: "大人数の場合は含まれていることも" },
                    { en: "Keep the change.", ja: "お釣りはいりません。", notes: "チップとして渡す" },
                    { en: "Could I have the bill, please?", ja: "お会計をお願いします。", notes: "" },
                    { en: "I'd like to add a tip.", ja: "チップを追加したいです。", notes: "カード払いの時" },
                ]
            }
        ]
    }
];

// Helper: Get all lessons flat
export function getAllLessons() {
    return stages.flatMap(s => s.lessons);
}

// Helper: Get lesson by ID
export function getLessonById(id) {
    for (const stage of stages) {
        const lesson = stage.lessons.find(l => l.id === id);
        if (lesson) return { ...lesson, stageId: stage.id, stageTitle: stage.title };
    }
    return null;
}

// Helper: Get stage by lesson ID
export function getStageByLessonId(lessonId) {
    return stages.find(s => s.lessons.some(l => l.id === lessonId));
}
