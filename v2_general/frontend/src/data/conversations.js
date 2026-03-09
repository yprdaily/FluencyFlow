/**
 * Conversation Scenarios - 会話シミュレーション（汎用英語版）
 * 実生活のさまざまな場面でのロールプレイ練習シナリオ。
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
            { speaker: 'user', expected: "Here you go.", hints: ["Here it is.", "Sure, here you go.", "Here's my passport."], ja: "はい、どうぞ。" },
            { speaker: 'officer', text: "What's the purpose of your visit?", ja: "訪問の目的は何ですか？", waitForUser: false },
            { speaker: 'user', expected: "I'm here for sightseeing.", hints: ["For vacation.", "Tourism.", "I'm on holiday."], ja: "観光です。" },
            { speaker: 'officer', text: "How long will you be staying?", ja: "どのくらい滞在しますか？", waitForUser: false },
            { speaker: 'user', expected: "About one week.", hints: ["Seven days.", "A week.", "For one week."], ja: "約1週間です。" },
            { speaker: 'officer', text: "Where will you be staying?", ja: "どこに滞在しますか？", waitForUser: false },
            { speaker: 'user', expected: "I'm staying at a hotel downtown.", hints: ["At a hotel.", "I'm staying at the Grand Hotel.", "A hotel near the station."], ja: "ダウンタウンのホテルです。" },
            { speaker: 'officer', text: "Enjoy your stay! Welcome.", ja: "滞在をお楽しみください！ようこそ。", waitForUser: false },
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
            { speaker: 'staff', text: "Welcome! How can I help you?", ja: "いらっしゃいませ！ご用件は？", waitForUser: false },
            { speaker: 'user', expected: "I'd like to check in, please.", hints: ["Check in, please.", "I have a reservation.", "Checking in."], ja: "チェックインをお願いします。" },
            { speaker: 'staff', text: "Could I have your name or reservation number?", ja: "お名前または予約番号をお願いします。", waitForUser: false },
            { speaker: 'user', expected: "It's under Tanaka. T-A-N-A-K-A.", hints: ["The name is Tanaka.", "Tanaka.", "Reservation under Tanaka."], ja: "田中です。T-A-N-A-K-A。" },
            { speaker: 'staff', text: "I found your reservation. Would you prefer any specific room type?", ja: "予約を確認しました。特にご希望のお部屋はありますか？", waitForUser: false },
            { speaker: 'user', expected: "Could I get a room with a nice view?", hints: ["A room with a view, please.", "A higher floor would be great.", "I'd prefer a quiet room."], ja: "眺めの良い部屋をお願いできますか？" },
            { speaker: 'staff', text: "Of course! Here is your key card. Your room is on the 12th floor.", ja: "もちろんです！こちらがカードキーです。お部屋は12階です。", waitForUser: false },
            { speaker: 'staff', text: "Checkout is at 11 AM. Have a wonderful evening!", ja: "チェックアウトは午前11時です。素敵な夜を！", waitForUser: false },
        ]
    },
    {
        id: 'restaurant-order',
        title: 'レストランで注文しよう',
        icon: '🍽️',
        description: 'レストランでの食事注文を練習します。',
        difficulty: 'intermediate',
        xpReward: 50,
        scene: 'カジュアルレストラン',
        steps: [
            { speaker: 'server', text: "Hi there! Welcome! Table for how many?", ja: "いらっしゃい！何名様ですか？", waitForUser: false },
            { speaker: 'user', expected: "Table for two, please.", hints: ["Two, please.", "For two.", "A table for two."], ja: "2名です。" },
            { speaker: 'server', text: "Right this way! Here are your menus. Can I get you something to drink?", ja: "こちらへどうぞ！メニューです。お飲み物はいかがですか？", waitForUser: false },
            { speaker: 'user', expected: "I'll have a glass of water, please.", hints: ["Water, please.", "Just water for now.", "A glass of water."], ja: "お水をください。" },
            { speaker: 'server', text: "Are you ready to order? I'd recommend the grilled chicken — it's our most popular dish.", ja: "ご注文はお決まりですか？グリルドチキンが一番人気です。", waitForUser: false },
            { speaker: 'user', expected: "I'll have the grilled chicken, please.", hints: ["I'll try the grilled chicken.", "The chicken sounds great.", "Grilled chicken, please."], ja: "グリルドチキンをお願いします。" },
            { speaker: 'server', text: "Great choice! Anything else?", ja: "いいですね！他にご注文は？", waitForUser: false },
            { speaker: 'user', expected: "That's all, thank you!", hints: ["That's it.", "No, that's all.", "That'll be all, thanks."], ja: "以上です、ありがとう！" },
        ]
    },
    {
        id: 'cafe-smalltalk',
        title: 'カフェでの雑談',
        icon: '☕',
        description: '偶然知り合った人とカフェでスモールトークを楽しもう。',
        difficulty: 'intermediate',
        xpReward: 50,
        scene: 'カフェのカウンター席',
        steps: [
            { speaker: 'stranger', text: "Excuse me, is this seat taken?", ja: "すみません、この席空いてますか？", waitForUser: false },
            { speaker: 'user', expected: "No, go ahead!", hints: ["It's empty.", "Please, have a seat.", "No, it's free."], ja: "空いてますよ、どうぞ！" },
            { speaker: 'stranger', text: "Thanks! I love this café. Do you come here often?", ja: "ありがとう！このカフェ好きなんです。よく来ますか？", waitForUser: false },
            { speaker: 'user', expected: "This is my first time, actually.", hints: ["It's my first time here.", "I just found this place.", "No, I'm new here."], ja: "実は初めてなんです。" },
            { speaker: 'stranger', text: "Oh nice! What do you do for work?", ja: "へえ！お仕事は何をしてるんですか？", waitForUser: false },
            { speaker: 'user', expected: "I work in IT. How about you?", hints: ["I'm an engineer.", "I work for a tech company.", "I'm in the IT industry."], ja: "IT関係です。あなたは？" },
            { speaker: 'stranger', text: "I'm a freelance designer. It's great to meet you!", ja: "フリーランスのデザイナーです。お会いできてうれしいです！", waitForUser: false },
            { speaker: 'user', expected: "Nice to meet you too! That sounds interesting.", hints: ["Likewise!", "Nice to meet you as well.", "That's really cool!"], ja: "こちらこそ！面白そうですね。" },
        ]
    },
    {
        id: 'apartment-viewing',
        title: 'アパートの内見',
        icon: '🏠',
        description: '海外でアパートを借りるための内見を体験しよう。',
        difficulty: 'advanced',
        xpReward: 60,
        scene: 'アパートの一室',
        steps: [
            { speaker: 'agent', text: "Welcome! So this is the apartment. It's a one-bedroom with a nice living area. What do you think?", ja: "いらっしゃい！これがお部屋です。リビング付きの1ベッドルームですよ。いかがですか？", waitForUser: false },
            { speaker: 'user', expected: "It looks great! How much is the rent?", hints: ["Looks nice! What's the rent?", "I like it. How much per month?", "It's nice! What's the monthly cost?"], ja: "いいですね！家賃はいくらですか？" },
            { speaker: 'agent', text: "It's $1,200 per month, utilities included.", ja: "月1,200ドルで光熱費込みです。", waitForUser: false },
            { speaker: 'user', expected: "Are pets allowed?", hints: ["Can I have a pet?", "Is it pet-friendly?", "Do you allow pets?"], ja: "ペットは飼えますか？" },
            { speaker: 'agent', text: "Small pets are fine, but there's a $200 pet deposit. How soon would you like to move in?", ja: "小さいペットはOKですが、200ドルの保証金がかかります。いつ入居したいですか？", waitForUser: false },
            { speaker: 'user', expected: "I'd like to move in next month if possible.", hints: ["Next month, ideally.", "As soon as possible.", "I'm looking at early next month."], ja: "来月から入居できればと思います。" },
            { speaker: 'agent', text: "That works! I'll prepare the lease agreement. Do you have any other questions?", ja: "大丈夫です！賃貸契約書を準備しますね。他に何かありますか？", waitForUser: false },
            { speaker: 'user', expected: "Is there a laundry room in the building?", hints: ["Where can I do laundry?", "Is there laundry?", "Does the building have laundry facilities?"], ja: "建物内に洗濯室はありますか？" },
        ]
    },
    {
        id: 'doctor-visit',
        title: '病院を受診する',
        icon: '🏥',
        description: '海外の病院で症状を伝え、診察を受ける。',
        difficulty: 'intermediate',
        xpReward: 50,
        scene: 'クリニックの診察室',
        steps: [
            { speaker: 'doctor', text: "Good morning. What seems to be the problem?", ja: "おはようございます。どうしましたか？", waitForUser: false },
            { speaker: 'user', expected: "I have a terrible headache and a sore throat.", hints: ["I have a headache.", "My head hurts and my throat is sore.", "I'm not feeling well. Headache and sore throat."], ja: "ひどい頭痛と喉の痛みがあります。" },
            { speaker: 'doctor', text: "How long have you had these symptoms?", ja: "いつからこの症状がありますか？", waitForUser: false },
            { speaker: 'user', expected: "Since yesterday morning.", hints: ["Since yesterday.", "It started yesterday.", "About a day now."], ja: "昨日の朝からです。" },
            { speaker: 'doctor', text: "Do you have a fever?", ja: "熱はありますか？", waitForUser: false },
            { speaker: 'user', expected: "Yes, I think I have a slight fever.", hints: ["I think so.", "A little, yes.", "I feel warm."], ja: "はい、少し熱があると思います。" },
            { speaker: 'doctor', text: "I'll prescribe some medicine. Make sure to get plenty of rest and drink lots of water.", ja: "薬を処方します。しっかり休んで水分をたくさん取ってくださいね。", waitForUser: false },
            { speaker: 'user', expected: "Thank you, Doctor. Where is the nearest pharmacy?", hints: ["Thanks. Where can I get the medicine?", "Thank you. Is there a pharmacy nearby?"], ja: "ありがとうございます、先生。最寄りの薬局はどこですか？" },
        ]
    }
];

// Helper: Get conversation by ID
export function getConversationById(id) {
    return conversations.find(c => c.id === id) || null;
}
