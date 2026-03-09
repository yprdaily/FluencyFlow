/**
 * Idioms Data - イディオム（慣用句）辞典
 * 直訳では意味がわからない英語表現を、カテゴリ別に収録。
 * context: ニュアンス補足、literal: 直訳、usage: フォーマル度
 */

export const idiomCategories = [
    {
        id: 'daily-life',
        title: '日常で頻出',
        icon: '🏠',
        description: '毎日の会話で自然に飛び出すイディオム',
        idioms: [
            { en: "I'm your man", ja: "任せて・私に頼んで", literal: "私はあなたの男です", example: "Need someone to fix the computer? I'm your man.", exampleJa: "パソコン直す人が必要？任せて。", context: "頼まれごとに「自分が適任だ」と応じる時。性別問わず使える。", usage: "カジュアル" },
            { en: "Don't go there", ja: "その話題には触れないで", literal: "そこに行くな", example: "So about your ex... — Don't go there.", exampleJa: "元カレの話だけど… — その話はやめて。", context: "デリケートな話題や嫌な思い出に触れられた時に止める表現。", usage: "カジュアル" },
            { en: "Break a leg", ja: "頑張って！", literal: "足を折れ", example: "Your audition is today? Break a leg!", exampleJa: "今日オーディション？頑張って！", context: "Good luck の代わり。特に舞台やパフォーマンスの前に使う。", usage: "カジュアル" },
            { en: "Piece of cake", ja: "楽勝・簡単", literal: "ケーキ一切れ", example: "The test was a piece of cake.", exampleJa: "テストは楽勝だった。", context: "何かがとても簡単だった時に使う。", usage: "カジュアル" },
            { en: "Hang in there", ja: "持ちこたえて・頑張って", literal: "そこにぶら下がっていて", example: "I know work is tough, but hang in there!", exampleJa: "仕事大変なのはわかる、でも頑張って！", context: "辛い状況の人を励ます時に使う定番フレーズ。", usage: "カジュアル〜フォーマル" },
            { en: "It's not rocket science", ja: "そんなに難しくない", literal: "ロケット科学じゃない", example: "Just follow the instructions. It's not rocket science.", exampleJa: "手順に従えばいいだけだよ。そんなに難しくない。", context: "誰かが難しがっている時に「簡単だよ」と伝える。少し皮肉も含む。", usage: "カジュアル" },
            { en: "Let's call it a day", ja: "今日はここまでにしよう", literal: "それを1日と呼ぼう", example: "I'm exhausted. Let's call it a day.", exampleJa: "疲れた。今日はここまでにしよう。", context: "仕事や活動を切り上げる時の定番。", usage: "カジュアル〜ビジネス" },
            { en: "That rings a bell", ja: "聞き覚えがある", literal: "それはベルを鳴らす", example: "Tanaka? That name rings a bell.", exampleJa: "田中？聞き覚えがあるな。", context: "完全には思い出せないが、なんとなく知っている時。", usage: "カジュアル" },
            { en: "Hit the nail on the head", ja: "的を射た・まさにその通り", literal: "釘の頭を叩いた", example: "You hit the nail on the head with that comment.", exampleJa: "そのコメント、まさに的を射ているね。", context: "誰かの指摘が完璧に正しい時に使う。", usage: "カジュアル〜フォーマル" },
            { en: "Under the weather", ja: "体調が悪い", literal: "天気の下に", example: "I'm feeling a bit under the weather today.", exampleJa: "今日はちょっと体調が悪い。", context: "sick のやわらかい言い方。軽い体調不良に使うことが多い。", usage: "カジュアル〜フォーマル" },
        ]
    },
    {
        id: 'emotions',
        title: '感情・気持ちを表す',
        icon: '❤️',
        description: '喜怒哀楽や微妙な心情を伝えるイディオム',
        idioms: [
            { en: "On cloud nine", ja: "最高に幸せ・有頂天", literal: "雲の9番目の上に", example: "She was on cloud nine after getting the job.", exampleJa: "仕事が決まって彼女は有頂天だった。", context: "この上なく幸せな状態。", usage: "カジュアル" },
            { en: "Butterflies in my stomach", ja: "緊張でドキドキする", literal: "胃の中に蝶々", example: "I had butterflies in my stomach before the speech.", exampleJa: "スピーチの前、緊張でドキドキしていた。", context: "緊張やワクワクでお腹がそわそわする感覚。", usage: "カジュアル" },
            { en: "Over the moon", ja: "大喜びしている", literal: "月を越えて", example: "He was over the moon when he passed the exam.", exampleJa: "試験に受かって彼は大喜びだった。", context: "非常に嬉しい時。イギリス英語でよく使われる。", usage: "カジュアル" },
            { en: "Cry over spilled milk", ja: "済んだことをくよくよする", literal: "こぼれた牛乳のことで泣く", example: "It's done. No use crying over spilled milk.", exampleJa: "もう終わったこと。くよくよしても仕方ない。", context: "過去の失敗を嘆いても無駄だと言う時。通常 'Don't cry over…' の否定形。", usage: "カジュアル" },
            { en: "Get cold feet", ja: "怖気づく・尻込みする", literal: "足が冷たくなる", example: "He got cold feet before the wedding.", exampleJa: "結婚式の前に彼は怖気づいた。", context: "大事な決断の直前に不安になって躊躇すること。", usage: "カジュアル" },
            { en: "Blow off steam", ja: "ストレス発散する", literal: "蒸気を吹き飛ばす", example: "I go running to blow off steam.", exampleJa: "ストレス発散のためにランニングしている。", context: "イライラやストレスを解消すること。", usage: "カジュアル" },
            { en: "Have a chip on your shoulder", ja: "不満を抱えている・怒りっぽい", literal: "肩にチップを乗せている", example: "He has a chip on his shoulder about not being promoted.", exampleJa: "昇進できなかったことに不満を抱えている。", context: "過去の出来事が原因で攻撃的・防衛的になっている状態。", usage: "カジュアル" },
            { en: "Wear your heart on your sleeve", ja: "感情を隠さない", literal: "袖に心臓をつけている", example: "She wears her heart on her sleeve.", exampleJa: "彼女は感情をストレートに表す人だ。", context: "感情が表に出やすい人を描写する。ポジティブにもネガティブにも使う。", usage: "カジュアル" },
        ]
    },
    {
        id: 'work-business',
        title: 'ビジネス・仕事',
        icon: '💼',
        description: '会議やメール、職場で飛び交うイディオム',
        idioms: [
            { en: "The ball is in your court", ja: "あとはあなた次第", literal: "ボールはあなたのコートにある", example: "I've sent the proposal. The ball is in your court.", exampleJa: "提案は送りました。あとはあなた次第です。", context: "自分のやることは終えたので、次は相手が行動する番だと伝える。", usage: "ビジネス" },
            { en: "Back to the drawing board", ja: "やり直し・白紙に戻す", literal: "製図板に戻る", example: "The plan failed. Back to the drawing board.", exampleJa: "計画は失敗した。やり直しだ。", context: "失敗して最初からやり直す時。", usage: "カジュアル〜ビジネス" },
            { en: "Think outside the box", ja: "既成概念にとらわれず考える", literal: "箱の外で考える", example: "We need to think outside the box to solve this.", exampleJa: "この問題を解決するには柔軟な発想が必要だ。", context: "従来のやり方ではなく創造的に考えること。", usage: "ビジネス" },
            { en: "Cut corners", ja: "手を抜く・近道する", literal: "角を切る", example: "Don't cut corners on the safety inspection.", exampleJa: "安全検査で手を抜くな。", context: "時間や費用を節約するために品質を犠牲にすること。否定的な意味。", usage: "カジュアル〜ビジネス" },
            { en: "Get the ball rolling", ja: "始める・物事を動かす", literal: "ボールを転がし始める", example: "Let's get the ball rolling on the new project.", exampleJa: "新しいプロジェクトを始めよう。", context: "行動を開始する・進め始めるという意味。", usage: "ビジネス" },
            { en: "Go the extra mile", ja: "期待以上に頑張る", literal: "余分に1マイル歩く", example: "She always goes the extra mile for her clients.", exampleJa: "彼女はいつもクライアントのために期待以上のことをする。", context: "求められている以上の努力をすること。褒め言葉。", usage: "ビジネス" },
            { en: "Throw someone under the bus", ja: "誰かに責任を押しつける", literal: "バスの下に投げ込む", example: "He threw his coworker under the bus in the meeting.", exampleJa: "会議で同僚に責任を押しつけた。", context: "自分を守るために他人を犠牲にすること。非常にネガティブ。", usage: "カジュアル〜ビジネス" },
            { en: "Bite off more than you can chew", ja: "自分の能力以上のことを引き受ける", literal: "噛めないほど大きく噛みついた", example: "I think I bit off more than I can chew with this project.", exampleJa: "このプロジェクトは自分には荷が重かった。", context: "能力以上のことを引き受けてしまった時の後悔。", usage: "カジュアル" },
        ]
    },
    {
        id: 'relationships',
        title: '人間関係',
        icon: '🤝',
        description: '友情・恋愛・対人関係で使うイディオム',
        idioms: [
            { en: "See eye to eye", ja: "意見が一致する", literal: "目と目を合わせて見る", example: "We don't always see eye to eye, but we respect each other.", exampleJa: "いつも意見が合うわけではないが、互いを尊重している。", context: "主に否定形（don't see eye to eye）で「意見が食い違う」の意味で使うことが多い。", usage: "カジュアル〜フォーマル" },
            { en: "Give someone the cold shoulder", ja: "冷たくあしらう", literal: "誰かに冷たい肩を向ける", example: "She gave me the cold shoulder after the argument.", exampleJa: "口論の後、彼女は私を冷たくあしらった。", context: "わざと無視したり冷淡に接すること。", usage: "カジュアル" },
            { en: "Stab someone in the back", ja: "裏切る", literal: "背中からナイフで刺す", example: "I can't believe he stabbed me in the back like that.", exampleJa: "あんな形で裏切られるなんて信じられない。", context: "信頼していた人に裏切られること。強い表現。", usage: "カジュアル" },
            { en: "Break the ice", ja: "場を和ませる・打ち解ける", literal: "氷を壊す", example: "Let me tell a joke to break the ice.", exampleJa: "場を和ませるためにジョークを言おう。", context: "初対面や緊張した雰囲気を和らげること。", usage: "カジュアル〜ビジネス" },
            { en: "Hit it off", ja: "すぐに意気投合する", literal: "それを打ち飛ばす", example: "We hit it off immediately at the party.", exampleJa: "パーティーですぐに意気投合した。", context: "初対面ですぐに仲良くなること。", usage: "カジュアル" },
            { en: "Bend over backwards", ja: "全力を尽くす・無理してでもやる", literal: "後ろに身体を反らせる", example: "She bent over backwards to help me move.", exampleJa: "引っ越しを手伝うために彼女は全力を尽くしてくれた。", context: "誰かのために非常に大きな努力をすること。", usage: "カジュアル" },
            { en: "Spill the beans", ja: "秘密をばらす", literal: "豆をこぼす", example: "Come on, spill the beans! What happened?", exampleJa: "ねえ、教えてよ！何があったの？", context: "秘密を漏らす、または秘密を教えてほしいと頼む時。", usage: "カジュアル" },
            { en: "Let the cat out of the bag", ja: "秘密をうっかりばらす", literal: "袋から猫を出す", example: "Oops, I let the cat out of the bag about the surprise party.", exampleJa: "しまった、サプライズパーティーのことをうっかりばらしちゃった。", context: "意図せず秘密を漏らしてしまうこと。", usage: "カジュアル" },
        ]
    },
    {
        id: 'time-money',
        title: '時間・お金・損得',
        icon: '⏰',
        description: '時間やお金に関するイディオム',
        idioms: [
            { en: "Time flies", ja: "時間が飛ぶように過ぎる", literal: "時間が飛ぶ", example: "Time flies when you're having fun!", exampleJa: "楽しい時は時間があっという間だ！", context: "楽しい時や忙しい時に時間が早く感じること。", usage: "カジュアル" },
            { en: "Cost an arm and a leg", ja: "ものすごく高い", literal: "腕と足がかかる", example: "That watch must have cost an arm and a leg.", exampleJa: "その時計、ものすごく高かったでしょ。", context: "非常に高価なものを表現する時。", usage: "カジュアル" },
            { en: "Save for a rainy day", ja: "万が一に備えて貯金する", literal: "雨の日のために取っておく", example: "I always save some money for a rainy day.", exampleJa: "いつも万が一に備えてお金を貯めている。", context: "将来の不測の事態に備えること。", usage: "カジュアル〜フォーマル" },
            { en: "Once in a blue moon", ja: "滅多にない", literal: "青い月に一度", example: "I only go to the movies once in a blue moon.", exampleJa: "映画に行くのは滅多にない。", context: "非常に稀にしか起こらないこと。", usage: "カジュアル" },
            { en: "In the nick of time", ja: "ギリギリ間に合って", literal: "時間の切れ目で", example: "We arrived at the airport in the nick of time.", exampleJa: "空港にギリギリ間に合った。", context: "まさに最後の瞬間に何かが起きること。", usage: "カジュアル" },
            { en: "Better late than never", ja: "遅れてもやらないよりマシ", literal: "「なし」より遅い方がいい", example: "You finally submitted it? Better late than never!", exampleJa: "やっと提出した？遅れてもやらないよりマシだね！", context: "遅れたことを許容する・励ます時に使う。", usage: "カジュアル" },
            { en: "A penny for your thoughts", ja: "何を考えているの？", literal: "あなたの考えに1ペニー", example: "You look lost in thought. A penny for your thoughts?", exampleJa: "考え事してるみたいだね。何を考えてるの？", context: "黙り込んでいる人に何を考えているか尋ねる丁寧な表現。", usage: "カジュアル" },
            { en: "The best of both worlds", ja: "いいとこ取り", literal: "両方の世界のベスト", example: "Working from home gives me the best of both worlds.", exampleJa: "リモートワークは仕事と私生活のいいとこ取りだ。", context: "2つの異なる選択肢の両方の利点を得ること。", usage: "カジュアル〜ビジネス" },
        ]
    },
    {
        id: 'wisdom',
        title: 'ことわざ・知恵',
        icon: '🧠',
        description: '人生の知恵を伝える英語のことわざ',
        idioms: [
            { en: "Actions speak louder than words", ja: "行動は言葉より雄弁", literal: "行動は言葉より大きく語る", example: "Don't just promise — actions speak louder than words.", exampleJa: "約束だけじゃダメ。行動で示して。", context: "言葉よりも実際の行動が大事だという教え。", usage: "フォーマル" },
            { en: "Every cloud has a silver lining", ja: "どんな困難にも希望はある", literal: "全ての雲には銀の裏地がある", example: "I lost my job, but every cloud has a silver lining — I found a better one.", exampleJa: "仕事を失ったけど、おかげでもっといい仕事が見つかった。", context: "辛い状況でも良い面があると励ます時に使う。", usage: "カジュアル〜フォーマル" },
            { en: "Don't judge a book by its cover", ja: "見た目で判断するな", literal: "表紙で本を判断するな", example: "He looks tough, but don't judge a book by its cover.", exampleJa: "強面だけど、見た目で判断しないで。", context: "外見だけでは中身はわからないという教え。", usage: "カジュアル" },
            { en: "The early bird catches the worm", ja: "早起きは三文の徳", literal: "早い鳥は虫を捕まえる", example: "I got the best seat because the early bird catches the worm.", exampleJa: "早く来たおかげでいい席が取れた。早起きは三文の徳だ。", context: "早く行動する人が有利だという教え。", usage: "カジュアル" },
            { en: "Kill two birds with one stone", ja: "一石二鳥", literal: "1つの石で2羽の鳥を殺す", example: "By biking to work, I exercise and save money — killing two birds with one stone.", exampleJa: "自転車通勤で運動と節約の一石二鳥。", context: "1つの行動で2つの成果を得ること。", usage: "カジュアル〜ビジネス" },
            { en: "When in Rome, do as the Romans do", ja: "郷に入っては郷に従え", literal: "ローマにいる時はローマ人がするようにしろ", example: "I tried the local food because when in Rome, do as the Romans do!", exampleJa: "現地の食べ物を試した。郷に入っては郷に従えだから！", context: "その場所のルールや習慣に合わせるべきだという教え。", usage: "カジュアル" },
            { en: "You can't have your cake and eat it too", ja: "二兎を追う者は一兎をも得ず", literal: "ケーキを持ちかつ食べることはできない", example: "You want more vacation AND a higher salary? You can't have your cake and eat it too.", exampleJa: "休みも増やしたいし給料も上げたい？それは両立できないよ。", context: "2つの相反するものを同時に得ることはできないということ。", usage: "カジュアル" },
            { en: "Practice makes perfect", ja: "練習すれば完璧になる・習うより慣れろ", literal: "練習は完璧を作る", example: "Don't worry about mistakes. Practice makes perfect!", exampleJa: "ミスを気にしないで。練習すれば上手くなるよ！", context: "英語学習にぴったりの格言。繰り返し練習が上達の鍵。", usage: "カジュアル〜フォーマル" },
        ]
    },
];

// Helper: Get all idioms flat
export function getAllIdioms() {
    return idiomCategories.flatMap(c => c.idioms);
}

// Helper: Get category by ID
export function getIdiomCategory(categoryId) {
    return idiomCategories.find(c => c.id === categoryId);
}

// Helper: Search idioms
export function searchIdioms(query) {
    const q = query.toLowerCase();
    return getAllIdioms().filter(i =>
        i.en.toLowerCase().includes(q) ||
        i.ja.includes(q) ||
        i.literal.includes(q)
    );
}
