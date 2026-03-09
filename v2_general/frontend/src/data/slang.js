/**
 * スラング・口語表現辞典データ（汎用英語版）
 * 実際に日常会話やSNSで使われている生きた英語表現
 * アメリカ英語を中心としたリアルな現代スラングを収録
 */

export const slangCategories = [
    {
        id: 'daily-basic',
        title: '日常の定番スラング',
        icon: '💬',
        description: 'ネイティブが毎日使うカジュアル表現',
        expressions: [
            { en: "My jam", ja: "お気に入り・大好きなもの", example: "This song is my jam!", exampleJa: "この曲、めっちゃ好き！", context: "好きな曲・食べ物・場所など何にでも使える。SNSでも頻出。" },
            { en: "No worries", ja: "大丈夫だよ・気にしないで", example: "Sorry I'm late. — No worries!", exampleJa: "遅れてごめん。— 大丈夫だよ！", context: "カジュアルな場面で「You're welcome」の代わりに使う。" },
            { en: "I'm down", ja: "賛成・やりたい", example: "Wanna grab dinner? — I'm down!", exampleJa: "夕飯一緒にどう？ — 行く行く！", context: "誘いに乗る時の定番フレーズ。若者を中心に広く使われる。" },
            { en: "My bad", ja: "ごめん・自分のミスです", example: "I forgot to bring your bag. My bad.", exampleJa: "バッグ持ってくるの忘れた。ごめん。", context: "Sorry より軽いカジュアルな謝罪。日常で頻繁に使われる。" },
            { en: "For real", ja: "マジで・本当に", example: "That concert was amazing! — For real!", exampleJa: "あのコンサートすごかった！ — マジで！", context: "驚き・同意・強調で使う。 'For real?' と疑問形でも使える。" },
            { en: "Chill", ja: "落ち着く・リラックスする", example: "Let's just chill at home tonight.", exampleJa: "今夜は家でまったりしよう。", context: "「リラックスする」の意味と「冷静な・落ち着いた」の形容詞の両方で使う。" },
            { en: "Lowkey", ja: "ちょっと・こっそり・密かに", example: "I lowkey want to quit my job.", exampleJa: "こっそり思ってるけど、仕事辞めたい。", context: "控えめに何かを認めたい時に使う。反対語は 'highkey'（大っぴらに）。" },
            { en: "Vibe", ja: "雰囲気・フィーリング", example: "This café has a great vibe.", exampleJa: "このカフェいい雰囲気だね。", context: "場所・人・音楽など何にでも使える万能表現。" },
            { en: "Lit", ja: "最高・盛り上がっている", example: "The party last night was so lit!", exampleJa: "昨夜のパーティー、最高だった！", context: "パーティーやイベントが楽しい時に使う。" },
            { en: "Slay", ja: "最高にやった・完璧", example: "You slay in that outfit!", exampleJa: "その服装、最高にキマってる！", context: "誰かを褒める時に使う。特にファッションやパフォーマンスで。" },
            { en: "Ghost", ja: "音信不通にする・無視する", example: "He ghosted me after the second date.", exampleJa: "2回目のデートの後、彼は音信不通になった。", context: "連絡を突然止めること。SNS時代のスラング。" },
            { en: "GOAT", ja: "史上最高", example: "Michael Jordan is the GOAT.", exampleJa: "マイケル・ジョーダンは史上最高だ。", context: "Greatest Of All Time の略。最上級の賛賛表現。" },
        ],
    },
    {
        id: 'reactions',
        title: 'リアクション・感情表現',
        icon: '😲',
        description: '驚き・共感・感動を表すリアル表現',
        expressions: [
            { en: "That's sick!", ja: "やばい！すごい！", example: "That trick was sick!", exampleJa: "あの技やばい！", context: "sick は「病気」ではなく「すごい」の意味。若者言葉。" },
            { en: "I can't even", ja: "もう無理（感動や呆れ）", example: "This view... I can't even.", exampleJa: "この景色…もう言葉にならない。", context: "感動や衝撃で言葉が出ない時に使う。SNSで大流行。" },
            { en: "Dead", ja: "笑い死ぬ・ウケる", example: "That joke was so funny, I'm dead.", exampleJa: "あのジョーク面白すぎて死んだ。", context: "爆笑した時に使う。 'I'm dying' とも言う。" },
            { en: "Shook", ja: "ショック・衝撃を受けた", example: "I was shook when I heard the news.", exampleJa: "そのニュースを聞いてショック受けた。", context: "驚いた・衝撃を受けた時に使う。" },
            { en: "Bet", ja: "了解・いいよ・賭ける", example: "Pick you up at 8? — Bet.", exampleJa: "8時に迎えに行く？ — 了解。", context: "同意・確認の返事。 'OK' や 'Sure' と同じ。若者に人気。" },
            { en: "No cap", ja: "嘘じゃなくて・マジで", example: "That was the best meal ever, no cap.", exampleJa: "今までで最高の食事だった、マジで。", context: "cap = 嘘。no cap = 嘘じゃない。真実を強調する。" },
            { en: "It hits different", ja: "格別だ・別格だ", example: "Morning coffee on a rainy day hits different.", exampleJa: "雨の日の朝コーヒーは格別だ。", context: "特定の状況で何かが特別に良く感じる時に使う。" },
            { en: "Salty", ja: "イラついている・ムカつく", example: "Don't be salty about losing.", exampleJa: "負けたからってイラつくなよ。", context: "怒りや不満を表す。「塩対応」に近い。" },
            { en: "Sus", ja: "怪しい・疑わしい", example: "That deal seems kinda sus.", exampleJa: "その取引ちょっと怪しくない？", context: "suspicious の略。Among Usで流行。日常でも広く使われる。" },
            { en: "Flex", ja: "自慢する・見せびらかす", example: "He's always flexing his new car.", exampleJa: "彼はいつも新車を自慢している。", context: "物や能力を見せびらかすこと。SNSで頻出。" },
        ],
    },
    {
        id: 'workplace-casual',
        title: '職場のカジュアル表現',
        icon: '💼',
        description: 'オフィスやビジネスの場で使われるくだけた表現',
        expressions: [
            { en: "Circle back", ja: "後で改めて話し合う", example: "Let's circle back on this topic later.", exampleJa: "この件は後で改めて話しましょう。", context: "ビジネスシーンでよく使われる。「後で戻る」イメージ。" },
            { en: "Take it offline", ja: "この場でなく別に話す", example: "Let's take this offline after the meeting.", exampleJa: "この件は会議後に別で話しましょう。", context: "会議中に脱線した話題を後で個別に議論する時。" },
            { en: "Heads up", ja: "事前のお知らせ・注意喚起", example: "Heads up — the boss is coming.", exampleJa: "お知らせ — ボスが来るよ。", context: "事前に注意を促す時に使うカジュアル表現。" },
            { en: "ASAP", ja: "できるだけ早く", example: "Can you finish this ASAP?", exampleJa: "これできるだけ早く終わらせてもらえる？", context: "As Soon As Possible の略。発音は「エイサップ」。" },
            { en: "On the same page", ja: "認識が一致している", example: "Are we on the same page?", exampleJa: "認識は合ってますか？", context: "全員が同じ理解でいるか確認する表現。" },
            { en: "Crunch time", ja: "追い込み・修羅場", example: "It's crunch time for the project.", exampleJa: "プロジェクトの追い込みだ。", context: "締め切り前の忙しい時期を指す。" },
            { en: "Touch base", ja: "軽く連絡を取る", example: "I'll touch base with you tomorrow.", exampleJa: "明日軽く連絡するね。", context: "check in のビジネス版。進捗確認のニュアンス。" },
            { en: "Burn out", ja: "燃え尽きる", example: "I'm starting to burn out from all the overtime.", exampleJa: "残業続きで燃え尽きそう。", context: "仕事のやりすぎで疲弊すること。名詞 'burnout' でも使う。" },
            { en: "Drop the ball", ja: "ミスる・やらかす", example: "I really dropped the ball on that report.", exampleJa: "あのレポート、やらかしちゃった。", context: "責任あることでミスをした時に使う。" },
            { en: "Hustle", ja: "必死に頑張る・副業", example: "She's been hustling to launch her business.", exampleJa: "彼女はビジネス立ち上げに必死だ。", context: "努力する意味と副業（side hustle）の両方で使う。" },
        ],
    },
    {
        id: 'travel-casual',
        title: '旅行で使えるカジュアル表現',
        icon: '✈️',
        description: '教科書には載らない、旅先で実際に使われる表現',
        expressions: [
            { en: "Grab a bite", ja: "軽く食べる", example: "Wanna grab a bite before the show?", exampleJa: "ショーの前に軽く食べない？", context: "正式な食事ではなく、さくっと何か食べるイメージ。" },
            { en: "Hang out", ja: "遊ぶ・一緒に過ごす", example: "Let's hang out downtown.", exampleJa: "街で遊ぼう。", context: "友達と時間を過ごすこと。カジュアルな表現。" },
            { en: "Rip off", ja: "ぼったくり", example: "That souvenir shop is a total rip off.", exampleJa: "あの土産物屋は完全にぼったくり。", context: "旅行先で知っておくべき重要表現。" },
            { en: "Touristy", ja: "観光客向けの（ちょっとバカにした）", example: "This area is too touristy for me.", exampleJa: "このエリアは観光地っぽすぎる。", context: "ローカルな場所を好む時に使う。" },
            { en: "Jet-lagged", ja: "時差ボケの", example: "I'm so jet-lagged right now.", exampleJa: "今めっちゃ時差ボケ。", context: "長距離フライト後の体内時計のズレ。" },
            { en: "To die for", ja: "死ぬほど美味い・最高すぎる", example: "The pasta here is to die for!", exampleJa: "ここのパスタは死ぬほど美味い！", context: "食べ物や景色の最上級褒め言葉。" },
            { en: "Sketchy", ja: "怪しい・危ない感じ", example: "That area looks kinda sketchy at night.", exampleJa: "あのエリアは夜ちょっと危ない感じ。", context: "安全面で不安を感じる場所や状況に使う。" },
            { en: "FOMO", ja: "取り残される不安", example: "I have major FOMO about missing the festival.", exampleJa: "フェスに行けなくてFOMOがやばい。", context: "Fear Of Missing Out の略。SNS文化から生まれた表現。" },
            { en: "Split the bill", ja: "割り勘にする", example: "Should we split the bill?", exampleJa: "割り勘にする？", context: "アメリカでは 'go Dutch' より 'split the bill' が一般的。" },
            { en: "Hit up", ja: "〜に行く・〜に連絡する", example: "Let's hit up that new ramen place.", exampleJa: "あの新しいラーメン屋に行こう。", context: "場所に「立ち寄る」、人に「連絡する」両方の意味で使える。" },
            { en: "Spot", ja: "場所・お店", example: "I know a great spot for breakfast.", exampleJa: "朝食にいいスポット知ってるよ。", context: "place のカジュアルな言い方。" },
            { en: "Call it a day", ja: "今日はここまでにしよう", example: "I'm tired. Let's call it a day.", exampleJa: "疲れた。今日はここまでにしよう。", context: "活動を終わりにする時の定番フレーズ。" },
        ],
    },
    {
        id: 'sns-modern',
        title: 'SNS・現代スラング',
        icon: '📱',
        description: 'Instagram, TikTok, テキストで使われる最新表現',
        expressions: [
            { en: "Fire 🔥", ja: "最高・イケてる", example: "Your new profile pic is fire!", exampleJa: "新しいプロフ写真、最高だね！", context: "見た目・食べ物・音楽など何でも褒める時に使う。🔥絵文字と一緒に。" },
            { en: "Bussin'", ja: "めちゃくちゃ美味い", example: "This ramen is bussin'!", exampleJa: "このラーメンめちゃくちゃ美味い！", context: "主に食べ物に使う。TikTokで爆発的に流行。" },
            { en: "Stan", ja: "熱狂的ファン・推す", example: "I stan that artist so hard.", exampleJa: "あのアーティストを激推ししてる。", context: "Eminem の曲から生まれたスラング。名詞でも動詞でも使う。" },
            { en: "Periodt", ja: "以上！（議論の余地なし）", example: "Coffee is the best drink. Periodt.", exampleJa: "コーヒーは最高の飲み物。以上。", context: "Period（ピリオド）を強調した形。「これ以上言うことなし」。" },
            { en: "Main character energy", ja: "主人公オーラ", example: "Walking into Monday with main character energy.", exampleJa: "主人公オーラで月曜日に挑む。", context: "自分が映画の主人公のように振る舞う・感じること。" },
            { en: "Glow up", ja: "劇的に良くなる", example: "She had a total glow up after college.", exampleJa: "大学卒業後、彼女は大変身した。", context: "見た目や雰囲気が劇的に改善すること。" },
            { en: "Caught in 4K", ja: "証拠バッチリ", example: "Eating cake at midnight — caught in 4K!", exampleJa: "深夜にケーキ食べてるとこ — バッチリ撮られた！", context: "何かをしている現場を目撃・撮影された時に使う。" },
            { en: "Living rent-free", ja: "頭から離れない", example: "That song is living rent-free in my head.", exampleJa: "あの曲が頭から離れない。", context: "何かが常に頭の中にある状態。良い意味でも悪い意味でも使う。" },
            { en: "Understood the assignment", ja: "完璧にやった", example: "The chef understood the assignment.", exampleJa: "シェフは完璧にやってのけた。", context: "期待以上の成果を出した時の褒め言葉。" },
            { en: "Ate and left no crumbs", ja: "完璧にやり遂げた", example: "Her presentation? She ate and left no crumbs.", exampleJa: "彼女のプレゼン？完璧だった。", context: "'Understood the assignment' と近い。完璧なパフォーマンスを褒める。" },
        ],
    },
];

export function getSlangCategory(categoryId) {
    return slangCategories.find(c => c.id === categoryId);
}
