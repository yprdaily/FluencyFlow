/**
 * Lessons Data - 学習コンテンツ（汎用英語版）
 * CEFR準拠のステージ構成。基礎→日常→実践→ビジネスの4ステージ。
 */

export const stages = [
    {
        id: 'basics',
        title: '基礎復習',
        subtitle: '中学英語を思い出そう（A1〜A2）',
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
                    { en: "There is a bookstore near here.", ja: "この近くに本屋があります。", notes: "There is 構文" },
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
                    { en: "Excuse me, where is the station?", ja: "すみません、駅はどこですか？", notes: "" },
                    { en: "Go straight and turn left.", ja: "まっすぐ行って左に曲がってください。", notes: "" },
                    { en: "It's about a 10-minute walk.", ja: "歩いて約10分です。", notes: "" },
                    { en: "Is it far from here?", ja: "ここから遠いですか？", notes: "" },
                    { en: "Can you show me on the map?", ja: "地図で見せてもらえますか？", notes: "" },
                    { en: "It's on your right side.", ja: "右側にあります。", notes: "" },
                    { en: "I'm looking for this place.", ja: "この場所を探しています。", notes: "" },
                    { en: "How do I get to the hotel?", ja: "ホテルへはどう行けばいいですか？", notes: "" },
                ]
            }
        ]
    },
    {
        id: 'daily',
        title: '日常英会話',
        subtitle: 'あらゆるシーン別の実践フレーズ（A2〜B1）',
        icon: '💬',
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
                    { en: "I'm staying at a hotel downtown.", ja: "ダウンタウンのホテルに泊まります。", notes: "" },
                    { en: "Where is the baggage claim?", ja: "手荷物受取所はどこですか？", notes: "" },
                    { en: "I have nothing to declare.", ja: "申告するものはありません。", notes: "税関で" },
                    { en: "Where can I catch a taxi?", ja: "タクシーはどこで乗れますか？", notes: "" },
                    { en: "My luggage is missing.", ja: "荷物が見当たりません。", notes: "トラブル時" },
                    { en: "Is there a shuttle bus to the city center?", ja: "市街地行きのシャトルバスはありますか？", notes: "" },
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
                    { en: "Could I get a room with a nice view?", ja: "眺めの良い部屋はありますか？", notes: "" },
                    { en: "What time is checkout?", ja: "チェックアウトは何時ですか？", notes: "" },
                    { en: "Can I have extra towels, please?", ja: "タオルを追加でもらえますか？", notes: "" },
                    { en: "The air conditioning isn't working.", ja: "エアコンが動きません。", notes: "トラブル" },
                    { en: "Is breakfast included?", ja: "朝食は含まれていますか？", notes: "" },
                    { en: "Could you keep my luggage until checkout?", ja: "チェックアウトまで荷物を預かってもらえますか？", notes: "" },
                    { en: "Where is the gym?", ja: "ジムはどこですか？", notes: "" },
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
                    { en: "How do I get to the city center from here?", ja: "ここから市街地へはどう行けばいいですか？", notes: "" },
                    { en: "Which bus goes to the station?", ja: "駅行きのバスはどれですか？", notes: "" },
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
        id: 'social',
        title: '社交・スモールトーク',
        subtitle: '友人・同僚との会話力を磨く（B1〜B2）',
        icon: '🗣️',
        color: '#10b981',
        lessons: [
            {
                id: 'small-talk',
                title: 'スモールトーク（雑談）',
                icon: '☕',
                xpReward: 30,
                phrases: [
                    { en: "What do you do for a living?", ja: "お仕事は何をしていますか？", notes: "定番の質問" },
                    { en: "How was your weekend?", ja: "週末はどうでしたか？", notes: "月曜の定番" },
                    { en: "I've been pretty busy lately.", ja: "最近かなり忙しいです。", notes: "" },
                    { en: "Do you have any hobbies?", ja: "趣味は何ですか？", notes: "" },
                    { en: "I'm really into cooking these days.", ja: "最近料理にハマっています。", notes: "into = 夢中になる" },
                    { en: "Have you seen any good movies recently?", ja: "最近良い映画見ましたか？", notes: "" },
                    { en: "The weather is really nice today, isn't it?", ja: "今日はいい天気ですね。", notes: "天気の話はスモールトークの定番" },
                    { en: "Where do you usually go for lunch?", ja: "ランチは普段どこに行きますか？", notes: "" },
                ]
            },
            {
                id: 'opinions',
                title: '意見を述べる・賛成と反対',
                icon: '💭',
                xpReward: 35,
                phrases: [
                    { en: "I think that's a great idea.", ja: "それは素晴らしい考えだと思います。", notes: "I think で意見を述べる" },
                    { en: "In my opinion, we should try a different approach.", ja: "私の意見では、別の方法を試すべきです。", notes: "フォーマルな意見表明" },
                    { en: "I totally agree with you.", ja: "完全にあなたに賛成です。", notes: "強い賛成" },
                    { en: "I see your point, but I disagree.", ja: "おっしゃることはわかりますが、私は反対です。", notes: "丁寧な反対" },
                    { en: "That's a good point.", ja: "良い指摘ですね。", notes: "相手を認める" },
                    { en: "I'm not sure about that.", ja: "それについてはよくわかりません。", notes: "やんわりとした否定" },
                    { en: "Could you explain what you mean?", ja: "もう少し詳しく説明してもらえますか？", notes: "" },
                    { en: "Let me think about it.", ja: "少し考えさせてください。", notes: "" },
                ]
            },
            {
                id: 'emotions',
                title: '感情を表現する',
                icon: '❤️',
                xpReward: 30,
                phrases: [
                    { en: "I'm so excited about the trip!", ja: "旅行がとても楽しみです！", notes: "ワクワク" },
                    { en: "I'm a bit nervous.", ja: "少し緊張しています。", notes: "" },
                    { en: "I'm disappointed that it was cancelled.", ja: "中止になって残念です。", notes: "" },
                    { en: "That made my day!", ja: "おかげで今日がいい1日になりました！", notes: "嬉しかった時" },
                    { en: "I'm relieved to hear that.", ja: "それを聞いてほっとしました。", notes: "" },
                    { en: "I'm frustrated with this situation.", ja: "この状況に苛立っています。", notes: "" },
                    { en: "I'm grateful for your support.", ja: "あなたのサポートに感謝しています。", notes: "" },
                    { en: "I'm overwhelmed right now.", ja: "今、圧倒されています（手一杯です）。", notes: "" },
                ]
            },
            {
                id: 'phone-calls',
                title: '電話の応対',
                icon: '📞',
                xpReward: 30,
                phrases: [
                    { en: "Hello, this is Tanaka speaking.", ja: "もしもし、田中です。", notes: "電話の基本" },
                    { en: "May I speak to Mr. Smith?", ja: "スミスさんはいらっしゃいますか？", notes: "" },
                    { en: "I'm sorry, he's not available right now.", ja: "申し訳ありませんが、今手が離せません。", notes: "" },
                    { en: "Could you call back later?", ja: "後でかけ直していただけますか？", notes: "" },
                    { en: "Can I leave a message?", ja: "伝言をお願いできますか？", notes: "" },
                    { en: "Let me transfer you to the right department.", ja: "担当部署におつなぎします。", notes: "" },
                    { en: "Sorry, I think you have the wrong number.", ja: "すみません、番号をお間違えではないですか。", notes: "" },
                    { en: "Thank you for calling.", ja: "お電話ありがとうございます。", notes: "" },
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
    },
    {
        id: 'business',
        title: 'ビジネス英会話',
        subtitle: '仕事で使える実践英語（B2〜C1）',
        icon: '💼',
        color: '#8b5cf6',
        lessons: [
            {
                id: 'meetings',
                title: '会議・ミーティング',
                icon: '🤝',
                xpReward: 40,
                phrases: [
                    { en: "Thank you all for joining today.", ja: "本日はお集まりいただきありがとうございます。", notes: "会議の冒頭" },
                    { en: "Let me share my screen.", ja: "画面を共有させてください。", notes: "オンライン会議" },
                    { en: "Does anyone have any questions?", ja: "何かご質問はありますか？", notes: "" },
                    { en: "I'd like to move on to the next topic.", ja: "次の議題に移りたいと思います。", notes: "" },
                    { en: "Could you elaborate on that?", ja: "もう少し詳しく説明していただけますか？", notes: "" },
                    { en: "Let's wrap up for today.", ja: "今日はここまでにしましょう。", notes: "" },
                    { en: "I'll send the meeting minutes by email.", ja: "議事録をメールでお送りします。", notes: "" },
                    { en: "When is the deadline for this?", ja: "これの締め切りはいつですか？", notes: "" },
                ]
            },
            {
                id: 'email-writing',
                title: 'ビジネスメール',
                icon: '📧',
                xpReward: 35,
                phrases: [
                    { en: "I hope this email finds you well.", ja: "お元気でお過ごしのことと存じます。", notes: "メール冒頭の定番" },
                    { en: "I am writing to inquire about...", ja: "…についてお尋ねするためにメールしております。", notes: "" },
                    { en: "Please find the attachment below.", ja: "添付ファイルをご確認ください。", notes: "" },
                    { en: "I look forward to hearing from you.", ja: "ご連絡をお待ちしております。", notes: "メール結び" },
                    { en: "I apologize for the delayed response.", ja: "返信が遅れまして申し訳ありません。", notes: "" },
                    { en: "Could you confirm the details?", ja: "詳細をご確認いただけますか？", notes: "" },
                    { en: "Thank you for your prompt reply.", ja: "迅速なご返信ありがとうございます。", notes: "" },
                    { en: "Please let me know if you need anything.", ja: "何かございましたらお知らせください。", notes: "" },
                ]
            },
            {
                id: 'job-interview',
                title: '就職面接',
                icon: '🎯',
                xpReward: 40,
                phrases: [
                    { en: "Tell me about yourself.", ja: "自己紹介をお願いします。", notes: "面接の定番質問" },
                    { en: "My strengths are communication and teamwork.", ja: "私の強みはコミュニケーション力とチームワークです。", notes: "" },
                    { en: "I have three years of experience in marketing.", ja: "マーケティングの分野で3年の経験があります。", notes: "" },
                    { en: "Why did you leave your previous job?", ja: "前職を辞めた理由は何ですか？", notes: "" },
                    { en: "Where do you see yourself in five years?", ja: "5年後の自分はどうなっていると思いますか？", notes: "" },
                    { en: "What motivates you?", ja: "モチベーションの源は何ですか？", notes: "" },
                    { en: "Do you have any questions for us?", ja: "何か質問はありますか？", notes: "面接の最後に必ず聞かれる" },
                    { en: "Thank you for this opportunity.", ja: "このような機会をいただきありがとうございます。", notes: "" },
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
