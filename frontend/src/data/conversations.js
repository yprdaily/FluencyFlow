/**
 * Conversation Scenarios - 会話シミュレーション
 */

export const conversations = [
    {
        id: 'airport-immigration',
        title: '入国審査を通過しよう',
        icon: '🛂',
        description: '空港の入国審査官との会話を練習します。',
        difficulty: 'beginner',
        xpReward: 40,
        scene: '入国審査カウンター',
        steps: [
            { speaker: 'officer', text: "Good afternoon. May I see your passport, please?", ja: "こんにちは。パスポートを見せてください。", waitForUser: false },
            { speaker: 'user', expected: "Here you go.", hints: ["Here you go.", "Here it is.", "Sure, here's my passport."], ja: "はい、どうぞ。" },
            { speaker: 'officer', text: "What's the purpose of your visit?", ja: "渡航の目的は？", waitForUser: false },
            { speaker: 'user', expected: "I'm here for sightseeing.", hints: ["I'm here for sightseeing.", "I'm on vacation.", "I'm here for a holiday."], ja: "観光です。" },
            { speaker: 'officer', text: "How long will you be staying?", ja: "どのくらい滞在しますか？", waitForUser: false },
            { speaker: 'user', expected: "I'll be staying for seven days.", hints: ["Seven days.", "About a week.", "I'll be staying for seven days."], ja: "7日間です。" },
            { speaker: 'officer', text: "Where will you be staying?", ja: "どちらに滞在されますか？", waitForUser: false },
            { speaker: 'user', expected: "I'm staying at the Hilton Hotel in Waikiki.", hints: ["At a hotel in Waikiki.", "I'm staying at the Hilton.", "The Hilton Hotel."], ja: "ワイキキのヒルトンホテルです。" },
            { speaker: 'officer', text: "Enjoy your stay! Welcome to Hawaii.", ja: "滞在をお楽しみください！ハワイへようこそ。", waitForUser: false },
        ]
    },
    {
        id: 'hotel-checkin',
        title: 'ホテルにチェックインしよう',
        icon: '🏨',
        description: 'ホテルのフロントでのチェックイン会話。',
        difficulty: 'beginner',
        xpReward: 40,
        scene: 'ホテルフロント',
        steps: [
            { speaker: 'staff', text: "Welcome to Hilton Hawaiian Village! How can I help you?", ja: "ヒルトンハワイアンビレッジへようこそ！ご用件は？", waitForUser: false },
            { speaker: 'user', expected: "I'd like to check in, please.", hints: ["I'd like to check in.", "Check in, please.", "I have a reservation."], ja: "チェックインをお願いします。" },
            { speaker: 'staff', text: "Of course! May I have your name?", ja: "かしこまりました！お名前をいただけますか？", waitForUser: false },
            { speaker: 'user', expected: "I have a reservation under Tanaka.", hints: ["Tanaka.", "My name is Tanaka.", "I have a reservation under Tanaka."], ja: "田中で予約しています。" },
            { speaker: 'staff', text: "I found your reservation. Would you like an ocean view or a city view?", ja: "ご予約を確認しました。オーシャンビューとシティビュー、どちらがよろしいですか？", waitForUser: false },
            { speaker: 'user', expected: "Could I get a room with an ocean view?", hints: ["Ocean view, please.", "An ocean view would be great.", "I'd prefer an ocean view."], ja: "オーシャンビューをお願いします。" },
            { speaker: 'staff', text: "Here's your room key. You're in room 1215. The elevator is on your right. Enjoy your stay!", ja: "こちらがルームキーです。1215号室です。エレベーターは右手にあります。滞在をお楽しみください！", waitForUser: false },
            { speaker: 'user', expected: "Thank you! What time is checkout?", hints: ["Thank you!", "Thanks! What time is checkout?", "Mahalo!"], ja: "ありがとう！チェックアウトは何時ですか？" },
            { speaker: 'staff', text: "Checkout is at 11 AM. Have a wonderful evening!", ja: "チェックアウトは午前11時です。素敵な夜を！", waitForUser: false },
        ]
    },
    {
        id: 'restaurant-order',
        title: 'レストランで注文しよう',
        icon: '🍽️',
        description: 'ハワイのレストランでの食事注文。',
        difficulty: 'intermediate',
        xpReward: 50,
        scene: 'ハワイアンレストラン',
        steps: [
            { speaker: 'server', text: "Hi there! Welcome! Table for how many?", ja: "いらっしゃい！何名様ですか？", waitForUser: false },
            { speaker: 'user', expected: "A table for two, please.", hints: ["Two, please.", "A table for two.", "Just two of us."], ja: "2名です。" },
            { speaker: 'server', text: "Right this way! Here's your menu. Can I get you something to drink?", ja: "こちらへどうぞ！メニューです。お飲み物は？", waitForUser: false },
            { speaker: 'user', expected: "Could we have some water, please?", hints: ["Water, please.", "Just water for now.", "Two waters, please."], ja: "お水をお願いします。" },
            { speaker: 'server', text: "Sure thing! Are you ready to order, or do you need a few minutes?", ja: "もちろん！ご注文はお決まりですか？もう少し時間が必要ですか？", waitForUser: false },
            { speaker: 'user', expected: "What do you recommend?", hints: ["What's good here?", "What do you recommend?", "What's your favorite dish?"], ja: "おすすめは何ですか？" },
            { speaker: 'server', text: "Our poke bowl is really popular! And the loco moco is a local favorite.", ja: "ポケ丼がとても人気です！ロコモコも地元で人気ですよ。", waitForUser: false },
            { speaker: 'user', expected: "I'll have the poke bowl, please.", hints: ["I'll try the poke bowl.", "The poke bowl sounds great.", "Poke bowl, please."], ja: "ポケ丼をお願いします。" },
            { speaker: 'server', text: "Great choice! Anything else?", ja: "いいチョイスです！他には？", waitForUser: false },
            { speaker: 'user', expected: "That's all, thank you!", hints: ["That's it.", "No, that's all.", "That'll be all, thanks."], ja: "以上です、ありがとう！" },
        ]
    },
    {
        id: 'beach-surfing',
        title: 'ビーチでサーフィン体験',
        icon: '🏄',
        description: 'ワイキキビーチでサーフレッスンを申し込む。',
        difficulty: 'intermediate',
        xpReward: 50,
        scene: 'ワイキキビーチ サーフショップ',
        steps: [
            { speaker: 'instructor', text: "Howzit! Welcome to Waikiki Surf School! Interested in a lesson?", ja: "よう！ワイキキサーフスクールへようこそ！レッスンに興味ありますか？", waitForUser: false },
            { speaker: 'user', expected: "Yes! I'd like to take a surf lesson.", hints: ["Yes, I'd love to try!", "I want to learn to surf.", "How much is a lesson?"], ja: "はい！サーフィンのレッスンを受けたいです。" },
            { speaker: 'instructor', text: "Awesome, brah! Have you surfed before?", ja: "いいね！サーフィンの経験はある？", waitForUser: false },
            { speaker: 'user', expected: "No, this is my first time.", hints: ["No, I'm a beginner.", "This is my first time.", "Never, but I really want to try!"], ja: "いいえ、初めてです。" },
            { speaker: 'instructor', text: "No worries! The beginner lesson is $80 for two hours. We provide the board and rash guard. Sound good?", ja: "心配いらないよ！初心者レッスンは2時間で80ドル。ボードとラッシュガードは用意するよ。どう？", waitForUser: false },
            { speaker: 'user', expected: "Sounds great! I'll do it.", hints: ["Sounds great!", "Let's do it!", "That sounds perfect."], ja: "いいですね！やります。" },
            { speaker: 'instructor', text: "Shoots! Let's get you set up. The waves are perfect today. You're gonna have a blast!", ja: "了解！準備しよう。今日は波がちょうどいいよ。めっちゃ楽しいと思うよ！", waitForUser: false },
        ]
    },
    {
        id: 'shopping-ala-moana',
        title: 'アラモアナでショッピング',
        icon: '🛍️',
        description: 'アラモアナセンターでのショッピング体験。',
        difficulty: 'intermediate',
        xpReward: 45,
        scene: 'アラモアナセンター 衣料品店',
        steps: [
            { speaker: 'clerk', text: "Hi! Welcome! Can I help you find something?", ja: "いらっしゃいませ！何かお探しですか？", waitForUser: false },
            { speaker: 'user', expected: "I'm just looking, thanks.", hints: ["I'm just browsing.", "Just looking, thanks.", "I'm good for now, thanks."], ja: "見ているだけです、ありがとう。" },
            { speaker: 'clerk', text: "Of course! Let me know if you need anything.", ja: "もちろん！何かあればお声がけください。", waitForUser: false },
            { speaker: 'user', expected: "Excuse me, do you have this in a medium?", hints: ["Do you have this in medium?", "Is this available in a smaller size?", "Can I get this in a different size?"], ja: "すみません、これのMサイズはありますか？" },
            { speaker: 'clerk', text: "Let me check... Yes, we do! Would you like to try it on?", ja: "確認しますね…はい、ありますよ！試着されますか？", waitForUser: false },
            { speaker: 'user', expected: "Yes, can I try this on?", hints: ["Yes, please!", "Where's the fitting room?", "I'd love to try it on."], ja: "はい、試着していいですか？" },
            { speaker: 'clerk', text: "The fitting rooms are right over there. Take your time!", ja: "試着室はあちらです。ごゆっくりどうぞ！", waitForUser: false },
            { speaker: 'user', expected: "I'll take this one. How much is it?", hints: ["I love it! I'll take it.", "This fits perfectly. How much?", "I'll buy this one."], ja: "これにします。いくらですか？" },
            { speaker: 'clerk', text: "That'll be $45. Cash or card?", ja: "45ドルになります。現金ですか？カードですか？", waitForUser: false },
            { speaker: 'user', expected: "Can I pay with a credit card?", hints: ["Card, please.", "Credit card.", "I'll pay by card."], ja: "クレジットカードで払えますか？" },
        ]
    }
];

export function getConversationById(id) {
    return conversations.find(c => c.id === id);
}
