/**
 * スラング・口語表現辞典データ
 * 実際に日常会話やSNSで使われている生きた英語表現
 * ハワイ・アメリカで通じるリアルな表現を収録
 */

export const slangCategories = [
    {
        id: 'daily-basic',
        title: '日常の定番スラング',
        icon: '💬',
        description: 'ネイティブが毎日使うカジュアル表現',
        expressions: [
            { en: "My jam", ja: "お気に入り・大好きなもの", example: "This song is my jam!", exampleJa: "この曲、めっちゃ好き！", context: "好きな曲・食べ物・場所など何にでも使える。SNSでも頻出。" },
            { en: "No worries", ja: "大丈夫だよ・気にしないで", example: "Sorry I'm late. — No worries!", exampleJa: "遅れてごめん。— 大丈夫だよ！", context: "ハワイでは特にカジュアルな場面で「You're welcome」の代わりに使う。" },
            { en: "I'm down", ja: "賛成・やりたい", example: "Wanna go surfing? — I'm down!", exampleJa: "サーフィン行く？ — 行く行く！", context: "誘いに乗る時の定番フレーズ。若者を中心に広く使われる。" },
            { en: "My bad", ja: "ごめん・自分のミスです", example: "I forgot to bring your bag. My bad.", exampleJa: "バッグ持ってくるの忘れた。ごめん。", context: "Sorry より軽いカジュアルな謝罪。日常で頻繁に使われる。" },
            { en: "For real", ja: "マジで・本当に", example: "That wave was huge! — For real!", exampleJa: "あの波でかかった！ — マジで！", context: "驚き・同意・強調で使う。 'For real?' と疑問形でも使える。" },
            { en: "Chill", ja: "落ち着く・リラックスする", example: "Let's just chill at the beach.", exampleJa: "ビーチでまったりしよう。", context: "「リラックスする」の意味と「冷静な・落ち着いた」の形容詞の両方で使う。" },
            { en: "Lowkey", ja: "ちょっと・こっそり・密かに", example: "I lowkey want to move to Hawaii.", exampleJa: "こっそり思ってるけどハワイに引っ越したい。", context: "控えめに何かを認めたい時に使う。反対語は 'highkey'（大っぴらに）。" },
            { en: "Vibe", ja: "雰囲気・フィーリング", example: "This place has a good vibe.", exampleJa: "このお店いい雰囲気だね。", context: "場所・人・音楽など何にでも使える万能表現。ハワイでは特に多用。" },
            { en: "Lit", ja: "最高・盛り上がっている", example: "The luau was so lit!", exampleJa: "ルアウ（ハワイの宴）、最高だった！", context: "パーティーやイベントが楽しい時に使う。" },
            { en: "Slay", ja: "最高にやった・完璧", example: "You slay in that outfit!", exampleJa: "その服装、最高にキマってる！", context: "誰かを褒める時に使う。特にファッションやパフォーマンスで。" },
            { en: "Ghost", ja: "音信不通にする・無視する", example: "He ghosted me after the vacation.", exampleJa: "休暇の後、彼は音信不通になった。", context: "連絡を突然止めること。SNS時代のスラング。" },
            { en: "GOAT", ja: "史上最高", example: "This poke place is the GOAT.", exampleJa: "このポケのお店は史上最高。", context: "Greatest Of All Time の略。最上級の賞賛表現。" },
        ],
    },
    {
        id: 'reactions',
        title: 'リアクション・感情表現',
        icon: '😲',
        description: '驚き・共感・感動を表すリアル表現',
        expressions: [
            { en: "That's sick!", ja: "やばい！すごい！", example: "That sunset is sick!", exampleJa: "あの夕日やばい！", context: "sick は「病気」ではなく「すごい」の意味。若者言葉。" },
            { en: "I can't even", ja: "もう無理（感動や呆れ）", example: "This view... I can't even.", exampleJa: "この景色…もう言葉にならない。", context: "感動や衝撃で言葉が出ない時に使う。SNSで大流行。" },
            { en: "Dead", ja: "笑い死ぬ・ウケる", example: "That joke was so funny, I'm dead.", exampleJa: "あのジョーク面白すぎて死んだ。", context: "爆笑した時に使う。 'I'm dying' とも言う。" },
            { en: "Shook", ja: "ショック・衝撃を受けた", example: "I was shook when I saw the price.", exampleJa: "値段を見てショック受けた。", context: "驚いた・衝撃を受けた時に使う。" },
            { en: "Bet", ja: "了解・いいよ・賭ける", example: "Pick you up at 8? — Bet.", exampleJa: "8時に迎えに行く？ — 了解。", context: "同意・確認の返事。 'OK' や 'Sure' と同じ。若者に人気。" },
            { en: "No cap", ja: "嘘じゃなくて・マジで", example: "That was the best meal ever, no cap.", exampleJa: "今までで最高の食事だった、マジで。", context: "cap = 嘘。no cap = 嘘じゃない。真実を強調する。" },
            { en: "It hits different", ja: "格別だ・別格だ", example: "Coffee on the beach hits different.", exampleJa: "ビーチで飲むコーヒーは格別だ。", context: "特定の状況で何かが特別に良く感じる時に使う。" },
            { en: "Salty", ja: "イラついている・ムカつく", example: "Don't be salty about losing.", exampleJa: "負けたからってイラつくなよ。", context: "怒りや不満を表す。「塩対応」に近い。" },
            { en: "Sus", ja: "怪しい・疑わしい", example: "That deal seems kinda sus.", exampleJa: "その取引ちょっと怪しくない？", context: "suspicious の略。Among Usで流行。日常でも広く使われる。" },
            { en: "Flex", ja: "自慢する・見せびらかす", example: "He's always flexing his new car.", exampleJa: "彼はいつも新車を自慢している。", context: "物や能力を見せびらかすこと。SNSで頻出。" },
        ],
    },
    {
        id: 'hawaii-slang',
        title: 'ハワイ限定スラング',
        icon: '🌺',
        description: 'ハワイでしか通じないローカル表現（ピジン英語含む）',
        expressions: [
            { en: "Howzit", ja: "調子どう？こんにちは", example: "Howzit, brah!", exampleJa: "よう、兄弟！", context: "ハワイ最も一般的な挨拶。How's it going? が変形したもの。" },
            { en: "Brah / Braddah", ja: "兄弟・友達", example: "Thanks, brah!", exampleJa: "ありがとう、兄弟！", context: "Brother が変形。ハワイでは老若男女問わず気軽に使う。" },
            { en: "Da kine", ja: "あれ・あのやつ（万能語）", example: "Pass me da kine.", exampleJa: "あれ取って。", context: "名前が出てこない時に何にでも使う魔法の言葉。ハワイピジンの象徴。" },
            { en: "Broke da mouth", ja: "めちゃくちゃ美味い", example: "This loco moco broke da mouth!", exampleJa: "このロコモコ、めちゃくちゃ美味い！", context: "直訳「口が壊れた」。美味しさの最上級表現。" },
            { en: "Shoots", ja: "OK！了解！", example: "Meet at 5? — Shoots!", exampleJa: "5時に集合？ — 了解！", context: "同意・了承のカジュアル表現。ハワイのあちこちで聞こえる。" },
            { en: "Pau", ja: "終わり・完了", example: "I'm pau with work.", exampleJa: "仕事終わったよ。", context: "ハワイ語由来。Pau hana = 仕事終わり（飲みに行く合図）。" },
            { en: "Grindz / Grinds", ja: "食べ物・飯", example: "Where's the best grindz around here?", exampleJa: "この辺で一番うまい飯はどこ？", context: "food のハワイスラング。'Ono grindz' = 美味い飯。" },
            { en: "Talk story", ja: "おしゃべりする・語り合う", example: "Let's sit down and talk story.", exampleJa: "座っておしゃべりしよう。", context: "ハワイのゆったりとした会話文化を象徴する表現。" },
            { en: "Shaka", ja: "ハワイの挨拶ジェスチャー 🤙", example: "See ya later! *throws shaka*", exampleJa: "また後でね！*シャカのポーズ*", context: "親指と小指を立てるポーズ 🤙。挨拶・感謝・Cool!の意味すべてを含む。" },
            { en: "Ono", ja: "美味しい", example: "This place has ono food!", exampleJa: "ここの食べ物は美味しい！", context: "ハワイ語で「美味しい」。メニューに 'Ono' とあれば「マグロ」（魚の名前）の意味も。" },
            { en: "Stoked", ja: "超テンション上がる", example: "I'm so stoked to be in Hawaii!", exampleJa: "ハワイに来れてテンション上がる！", context: "サーフィン文化から広まった表現。興奮・喜びを表す。" },
            { en: "Haole", ja: "外国人・非ハワイ系の人", example: "Tourists are sometimes called haole.", exampleJa: "観光客はhaoleと呼ばれることがある。", context: "元々はよそ者の意味。文脈によっては失礼になることもあるので注意。" },
            { en: "Mauka / Makai", ja: "山側 / 海側", example: "The shop is on the makai side.", exampleJa: "お店は海側にあるよ。", context: "ハワイでの道案内はこの2方向が基本。東西南北より使われる。" },
            { en: "Choke", ja: "たくさん・めっちゃ", example: "There's choke people at the beach today.", exampleJa: "今日ビーチにめちゃくちゃ人がいる。", context: "a lot of のハワイスラング。日常的に使われる。" },
        ],
    },
    {
        id: 'travel-casual',
        title: '旅行で使えるカジュアル表現',
        icon: '✈️',
        description: '教科書には載らない、旅先で実際に使われる表現',
        expressions: [
            { en: "Grab a bite", ja: "軽く食べる", example: "Wanna grab a bite before the show?", exampleJa: "ショーの前に軽く食べない？", context: "正式な食事ではなく、さくっと何か食べるイメージ。" },
            { en: "Hang out", ja: "遊ぶ・一緒に過ごす", example: "Let's hang out at the beach.", exampleJa: "ビーチで遊ぼう。", context: "友達と時間を過ごすこと。カジュアルな表現。" },
            { en: "Rip off", ja: "ぼったくり", example: "That souvenir shop is a total rip off.", exampleJa: "あの土産物屋は完全にぼったくり。", context: "旅行先で知っておくべき重要表現。" },
            { en: "Touristy", ja: "観光客向けの（ちょっとバカにした）", example: "This area is too touristy for me.", exampleJa: "このエリアは観光地っぽすぎる。", context: "ローカルな場所を好む時に使う。" },
            { en: "Jet-lagged", ja: "時差ボケの", example: "I'm so jet-lagged right now.", exampleJa: "今めっちゃ時差ボケ。", context: "日本→ハワイは -19時間。時差ボケは避けられない。" },
            { en: "To die for", ja: "死ぬほど美味い・最高すぎる", example: "The garlic shrimp here is to die for!", exampleJa: "ここのガーリックシュリンプは死ぬほど美味い！", context: "食べ物や景色の最上級褒め言葉。" },
            { en: "Sketchy", ja: "怪しい・危ない感じ", example: "That area looks kinda sketchy at night.", exampleJa: "あのエリアは夜ちょっと危ない感じ。", context: "安全面で不安を感じる場所や状況に使う。旅行中の安全確認に。" },
            { en: "FOMO", ja: "取り残される不安", example: "I have major FOMO about missing the luau.", exampleJa: "ルアウに行けなくてFOMOがやばい。", context: "Fear Of Missing Out の略。SNS文化から生まれた表現。" },
            { en: "Split the bill", ja: "割り勘にする", example: "Should we split the bill?", exampleJa: "割り勘にする？", context: "アメリカでは 'go Dutch' より 'split the bill' が一般的。" },
            { en: "Hit up", ja: "〜に行く・〜に連絡する", example: "Let's hit up that food truck.", exampleJa: "あのフードトラックに行こう。", context: "場所に「立ち寄る」、人に「連絡する」両方の意味で使える。" },
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
            { en: "Fire 🔥", ja: "最高・イケてる", example: "Your photos from Hawaii are fire!", exampleJa: "ハワイの写真、最高だね！", context: "見た目・食べ物・音楽など何でも褒める時に使う。🔥絵文字と一緒に。" },
            { en: "Bussin'", ja: "めちゃくちゃ美味い", example: "This poke bowl is bussin'!", exampleJa: "このポケ丼めちゃくちゃ美味い！", context: "主に食べ物に使う。TikTokで爆発的に流行。" },
            { en: "Stan", ja: "熱狂的ファン・推す", example: "I stan Hawaiian coffee.", exampleJa: "ハワイのコーヒーを激推ししてる。", context: "Eminem の曲から生まれたスラング。名詞でも動詞でも使う。" },
            { en: "Periodt", ja: "以上！（議論の余地なし）", example: "Hawaii is the best vacation spot. Periodt.", exampleJa: "ハワイは最高のバケーション先。以上。", context: "Period（ピリオド）を強調した形。「これ以上言うことなし」。" },
            { en: "Main character energy", ja: "主人公オーラ", example: "Walking on the beach with main character energy.", exampleJa: "主人公オーラでビーチを歩く。", context: "自分が映画の主人公のように振る舞う・感じること。" },
            { en: "Glow up", ja: "劇的に良くなる", example: "Hawaii gave me a total glow up.", exampleJa: "ハワイで完全にイメチェンした。", context: "見た目や雰囲気が劇的に改善すること。" },
            { en: "Caught in 4K", ja: "証拠バッチリ", example: "Eating a whole pizza — caught in 4K!", exampleJa: "ピザ一枚食い — バッチリ撮られた！", context: "何かをしている現場を目撃・撮影された時に使う。" },
            { en: "Living rent-free", ja: "頭から離れない", example: "That Hawaiian sunset is living rent-free in my head.", exampleJa: "あのハワイの夕日が頭から離れない。", context: "何かが常に頭の中にある状態。良い意味でも悪い意味でも使う。" },
            { en: "Understood the assignment", ja: "完璧にやった", example: "The chef understood the assignment.", exampleJa: "シェフは完璧にやってのけた。", context: "期待以上の成果を出した時の褒め言葉。" },
            { en: "Ate and left no crumbs", ja: "完璧にやり遂げた", example: "Her hula dance? She ate and left no crumbs.", exampleJa: "彼女のフラダンス？完璧だった。", context: "'Understood the assignment' と近い。完璧なパフォーマンスを褒める。" },
        ],
    },
];

export function getSlangCategory(categoryId) {
    return slangCategories.find(c => c.id === categoryId);
}
