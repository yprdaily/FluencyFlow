/**
 * 発音・イントネーション 比較ペア・トリオ辞典（超特大版）
 * まちがえやすい単語、通じないカタカナ英語、意味が変わってしまうペア・トリオを網羅。
 */

export const pronunciationPairs = [
    {
        category: '要注意ペア（カタカナ発音の罠）',
        pairs: [
            { words: [{ en: 'agree', ja: '賛成する', phonetic: '/əˈɡriː/' }, { en: 'ugly', ja: '醜い', phonetic: '/ˈʌɡli/' }], explanation: '「アグリー」とカタカナ発音すると醜いに聞こえる罠。agreeは「グ」から「リ」へなめらかに繋ぎ、uglyは「ア」を強く。' },
            { words: [{ en: 'walk', ja: '歩く', phonetic: '/wɔːk/' }, { en: 'work', ja: '働く', phonetic: '/wɜːrk/' }], explanation: 'walkは口を縦に大きく開ける「オ」、workは口をあまり開けず舌を引く「アー(R)」。' },
            { words: [{ en: 'want', ja: '欲しい', phonetic: '/wɑːnt/' }, { en: "won't", ja: '〜しないだろう', phonetic: '/woʊnt/' }], explanation: 'wantは口を大きく明けて「ワ」に近い「オ」、won\'tは唇を丸めて「オウ」。' },
            { words: [{ en: 'heart', ja: '心臓・心', phonetic: '/hɑːrt/' }, { en: 'hurt', ja: '傷つける・痛む', phonetic: '/hɜːrt/' }], explanation: 'heartは口を大きく開ける「ハ」、hurtは口をあまり開けずに舌を引く「ハ(R)」。' },
            { words: [{ en: 'career', ja: '経歴・キャリア', phonetic: '/kəˈrɪr/' }, { en: 'carrier', ja: '運ぶ人・通信会社', phonetic: '/ˈkæriər/' }], explanation: 'careerは後ろの「リ」にアクセント、carrierは最初の「キャ」にアクセント。' },
            { words: [{ en: 'allergy', ja: 'アレルギー', phonetic: '/ˈælərdʒi/' }, { en: 'energy', ja: 'エネルギー', phonetic: '/ˈenərdʒi/' }], explanation: '日本ではドイツ語読みですが、英語では「アラジー」「エナジー」のように発音します。' },
            { words: [{ en: 'theme', ja: 'テーマ', phonetic: '/θiːm/' }, { en: 'seam', ja: '縫い目', phonetic: '/siːm/' }], explanation: 'theme（テーマ）は英語では「シーム/スィーム」のように発音します。' },
            { words: [{ en: 'virus', ja: 'ウイルス', phonetic: '/ˈvaɪrəs/' }, { en: 'vaccine', ja: 'ワクチン', phonetic: '/vækˈsiːn/' }], explanation: '英語では「ヴァイラス」「ヴァクシーン」となります。' },
            { words: [{ en: 'water', ja: '水', phonetic: '/ˈwɔːtər/' }, { en: 'warder', ja: '看守', phonetic: '/ˈwɔːrdər/' }], explanation: 'アメリカ英語のwaterのTはラ行（フラップT）になり「ワーラー」のように聞こえます。' },
            { words: [{ en: 'iron', ja: '鉄・アイロン', phonetic: '/ˈaɪərn/' }, { en: 'irony', ja: '皮肉', phonetic: '/ˈaɪrəni/' }], explanation: 'ironは「アイアン」または「アイアーン」。アイロンとは発音しません。' },
            { words: [{ en: 'alcohol', ja: 'アルコール', phonetic: '/ˈælkəhɔːl/' }], explanation: '「アルコール」ではなく「アルカホール」のように発音します。' },
            { words: [{ en: 'studio', ja: 'スタジオ', phonetic: '/ˈstuːdioʊ/' }], explanation: '「スタジオ」ではなく「スチューディオ」に近い発音。' },
            { words: [{ en: 'tour', ja: 'ツアー', phonetic: '/tʊr/' }], explanation: '「ツアー」ではなく「トゥアー」に近い発音になります。' }
        ]
    },
    {
        category: 'L と R の違い',
        pairs: [
            { words: [{ en: 'right', ja: '右・正しい', phonetic: '/raɪt/' }, { en: 'light', ja: '光・軽い', phonetic: '/laɪt/' }], explanation: 'Rは舌をどこにもつけずに「ゥライト」、Lは舌先を前歯の裏につけて「ライト」。' },
            { words: [{ en: 'glass', ja: 'グラス', phonetic: '/ɡlæs/' }, { en: 'grass', ja: '草', phonetic: '/ɡræs/' }], explanation: '「グラスをください」が「草をください」に聞こえてしまう定番の罠。' },
            { words: [{ en: 'play', ja: '遊ぶ', phonetic: '/pleɪ/' }, { en: 'pray', ja: '祈る', phonetic: '/preɪ/' }], explanation: 'Let\'s play(遊ぼう)が Let\'s pray(祈ろう)にならないよう注意。' },
            { words: [{ en: 'fly', ja: '飛ぶ・ハエ', phonetic: '/flaɪ/' }, { en: 'fry', ja: '揚げる', phonetic: '/fraɪ/' }], explanation: 'フライドポテト(french fries)を頼むつもりがハエ(flies)に。' },
            { words: [{ en: 'lead', ja: '導く', phonetic: '/liːd/' }, { en: 'read', ja: '読む', phonetic: '/riːd/' }], explanation: '同じ音の長母音ですが、最初の子音が異なります。' },
            { words: [{ en: 'load', ja: '積む・負荷', phonetic: '/loʊd/' }, { en: 'road', ja: '道', phonetic: '/roʊd/' }], explanation: 'ダウンロード(download)のLと、道路(road)のRの違い。' },
            { words: [{ en: 'collect', ja: '集める', phonetic: '/kəˈlekt/' }, { en: 'correct', ja: '正しい・訂正する', phonetic: '/kəˈrekt/' }], explanation: '途中にあるLとRの聞き分け・言い分けも重要。' },
            { words: [{ en: 'royal', ja: '王室の', phonetic: '/ˈrɔɪəl/' }, { en: 'loyal', ja: '忠実な', phonetic: '/ˈlɔɪəl/' }], explanation: 'LとRの違いだけで意味が変わる代表。' },
            { words: [{ en: 'root', ja: '根', phonetic: '/ruːt/' }, { en: 'loot', ja: '略奪する', phonetic: '/luːt/' }], explanation: 'RとLのペア。' },
            { words: [{ en: 'arrive', ja: '到着する', phonetic: '/əˈraɪv/' }, { en: 'alive', ja: '生きている', phonetic: '/əˈlaɪv/' }], explanation: '単語の中盤にあるRとLのペア。' },
            { words: [{ en: 'rice', ja: '米', phonetic: '/raɪs/' }, { en: 'lice', ja: 'シラミ(複数)', phonetic: '/laɪs/' }], explanation: 'ライス(ご飯)を頼むつもりがシラミにならないよう注意。' },
            { words: [{ en: 'blush', ja: '顔を赤らめる', phonetic: '/blʌʃ/' }, { en: 'brush', ja: 'ブラシをかける', phonetic: '/brʌʃ/' }], explanation: '子音クラスト(bl vs br)の違い。' },
            { words: [{ en: 'flesh', ja: '肉体・果肉', phonetic: '/fleʃ/' }, { en: 'fresh', ja: '新鮮な', phonetic: '/freʃ/' }], explanation: 'フレッシュ(新鮮)な野菜、と言いたい時にfleshと言うと肉体の意味に。' },
            { words: [{ en: 'gloom', ja: '憂鬱', phonetic: '/ɡluːm/' }, { en: 'groom', ja: '新郎', phonetic: '/ɡruːm/' }], explanation: '結婚式で新郎(groom)を憂鬱(gloom)と言わないように。' }
        ]
    },
    {
        category: 'アの罠（A/U/O の違い）',
        pairs: [
            { words: [{ en: 'hat', ja: '帽子', phonetic: '/hæt/' }, { en: 'hut', ja: '小屋', phonetic: '/hʌt/' }, { en: 'hot', ja: '熱い', phonetic: '/hɑːt/' }], explanation: 'hatは「エ」と「ア」の中間、hutは短く「ア」、hotは口を大きく開けた「ア(オ)」。' },
            { words: [{ en: 'bag', ja: '鞄', phonetic: '/bæɡ/' }, { en: 'bug', ja: '虫', phonetic: '/bʌɡ/' }, { en: 'bog', ja: '沼地', phonetic: '/bɑːɡ/' }], explanation: 'bagは横に口を開き、bugは短く、bogは縦に開く。' },
            { words: [{ en: 'cap', ja: '帽子', phonetic: '/kæp/' }, { en: 'cup', ja: 'カップ', phonetic: '/kʌp/' }, { en: 'cop', ja: '警官', phonetic: '/kɑːp/' }], explanation: '「コーヒーカップ」が「cop（警官）」にならないよう注意。' },
            { words: [{ en: 'lack', ja: '不足', phonetic: '/læk/' }, { en: 'luck', ja: '運', phonetic: '/lʌk/' }, { en: 'lock', ja: '鍵', phonetic: '/lɑːk/' }], explanation: 'Good luck!が Good lock!(良い鍵だね) にならないように。' },
            { words: [{ en: 'match', ja: '試合・マッチ', phonetic: '/mætʃ/' }, { en: 'much', ja: 'たくさん', phonetic: '/mʌtʃ/' }], explanation: 'muchは口をあまり開けず短く発音します。' },
            { words: [{ en: 'ankle', ja: '足首', phonetic: '/ˈæŋkl/' }, { en: 'uncle', ja: 'おじ', phonetic: '/ˈʌŋkl/' }], explanation: 'My uncle(私のおじ)が My ankle(私の足首)にならないように。' },
            { words: [{ en: 'bat', ja: 'コウモリ・バット', phonetic: '/bæt/' }, { en: 'but', ja: 'しかし', phonetic: '/bʌt/' }], explanation: '接続詞のbutは非常に短く弱く発音されます。' },
            { words: [{ en: 'cat', ja: '猫', phonetic: '/kæt/' }, { en: 'cut', ja: '切る', phonetic: '/kʌt/' }], explanation: 'æとʌの違い。' },
            { words: [{ en: 'ran', ja: '走った(過去形)', phonetic: '/ræn/' }, { en: 'run', ja: '走る', phonetic: '/rʌn/' }], explanation: '動詞の現在形と過去形の違いも母音のæ/ʌで決まります。' },
            { words: [{ en: 'sang', ja: '歌った', phonetic: '/sæŋ/' }, { en: 'sung', ja: '歌われた(過去分詞)', phonetic: '/sʌŋ/' }], explanation: '動詞の活用形の違い。' },
            { words: [{ en: 'track', ja: '足跡・線路', phonetic: '/træk/' }, { en: 'truck', ja: 'トラック(車)', phonetic: '/trʌk/' }], explanation: '乗り物のトラックはʌです。' },
            { words: [{ en: 'mad', ja: '怒っている', phonetic: '/mæd/' }, { en: 'mud', ja: '泥', phonetic: '/mʌd/' }], explanation: 'æとʌの違い。' },
            { words: [{ en: 'damp', ja: '湿った', phonetic: '/dæmp/' }, { en: 'dump', ja: '捨てる・ゴミ捨て場', phonetic: '/dʌmp/' }], explanation: 'æとʌの違い。' }
        ]
    },
    {
        category: '超難関セット（3連・4連・それ以上）',
        pairs: [
            { words: [{ en: 'crash', ja: 'ガチャンと衝突する', phonetic: '/kræʃ/' }, { en: 'crush', ja: '押しつぶす・恋心', phonetic: '/krʌʃ/' }, { en: 'clash', ja: '意見の衝突', phonetic: '/klæʃ/' }], explanation: 'crash/crushは母音が違い（æ vs ʌ）、crash/clashはRとLの違い。非常に難易度が高いトリオ。' },
            { words: [{ en: 'law', ja: '法律', phonetic: '/lɔː/' }, { en: 'low', ja: '低い', phonetic: '/loʊ/' }, { en: 'raw', ja: '生の', phonetic: '/rɔː/' }, { en: 'row', ja: 'ボートを漕ぐ・列', phonetic: '/roʊ/' }], explanation: 'L/Rの違いと、aw/owの母音の違いが組み合わさった超難問。' },
            { words: [{ en: 'base', ja: '基礎・基地', phonetic: '/beɪs/' }, { en: 'vase', ja: '花瓶', phonetic: '/veɪs/' }, { en: 'bass', ja: '低音・バス', phonetic: '/beɪs/' }], explanation: 'baseとbassは同じ発音。vaseは最初の子音がV。' },
            { words: [{ en: 'bad', ja: '悪い', phonetic: '/bæd/' }, { en: 'bed', ja: 'ベッド', phonetic: '/bed/' }, { en: 'bud', ja: 'つぼみ', phonetic: '/bʌd/' }, { en: 'bird', ja: '鳥', phonetic: '/bɜːrd/' }], explanation: '母音の聞き分け（æ / e / ʌ / ɜːr）の総合テスト。' }
        ]
    },
    {
        category: 'B と V / F と P の違い',
        pairs: [
            { words: [{ en: 'berry', ja: 'ベリー（果物）', phonetic: '/ˈberi/' }, { en: 'very', ja: 'とても', phonetic: '/ˈveri/' }], explanation: 'Bは唇を閉じて破裂、Vは下唇を上の歯で軽く噛んで摩擦。' },
            { words: [{ en: 'best', ja: '最高の', phonetic: '/best/' }, { en: 'vest', ja: 'ベスト（チョッキ）', phonetic: '/vest/' }], explanation: 'My best friend が My vest friend にならないように注意。' },
            { words: [{ en: 'boat', ja: 'ボート', phonetic: '/boʊt/' }, { en: 'vote', ja: '投票する', phonetic: '/voʊt/' }], explanation: 'boatは両唇を合わせ、voteは下唇を軽く噛みます。' },
            { words: [{ en: 'ban', ja: '禁止する', phonetic: '/bæn/' }, { en: 'van', ja: 'バン（車）', phonetic: '/væn/' }], explanation: 'カタカナでは同じ「バン」ですが全く違う音です。' },
            { words: [{ en: 'bat', ja: 'コウモリ', phonetic: '/bæt/' }, { en: 'vat', ja: '大だる・タンク', phonetic: '/væt/' }], explanation: 'BとVの違い。' },
            { words: [{ en: 'bow', ja: 'お辞儀する', phonetic: '/baʊ/' }, { en: 'vow', ja: '誓う', phonetic: '/vaʊ/' }], explanation: 'BとVの違い。' },
            { words: [{ en: 'marble', ja: '大理石', phonetic: '/ˈmɑːrbl/' }, { en: 'marvel', ja: '驚異・驚く', phonetic: '/ˈmɑːrvl/' }], explanation: '単語の中盤に入るBとVの違い。' },
            { words: [{ en: 'fool', ja: '愚か者', phonetic: '/fuːl/' }, { en: 'pool', ja: 'プール', phonetic: '/puːl/' }], explanation: 'FとPの違い（フとプ）。プール(pool)のつもりで フール(fool) と言ってしまうと失礼に。' },
            { words: [{ en: 'fast', ja: '速い', phonetic: '/fæst/' }, { en: 'past', ja: '過去', phonetic: '/pæst/' }], explanation: 'FとPの違い。' },
            { words: [{ en: 'coffee', ja: 'コーヒー', phonetic: '/ˈkɔːfi/' }, { en: 'copy', ja: 'コピーする', phonetic: '/ˈkɑːpi/' }], explanation: 'カタカナだと「コーヒー」と「コピー」ですが、FとPの発音の違いに注意。' },
            { words: [{ en: 'fan', ja: 'ファン・扇風機', phonetic: '/fæn/' }, { en: 'pan', ja: 'フライパン', phonetic: '/pæn/' }], explanation: 'FとPの違い。' }
        ]
    },
    {
        category: 'S / SH / TH / Z の違い',
        pairs: [
            { words: [{ en: 'sink', ja: '沈む', phonetic: '/sɪŋk/' }, { en: 'think', ja: '考える', phonetic: '/θɪŋk/' }], explanation: 'Sは歯の間から息を漏らし、THは舌先を上下の歯で軽く挟んで息を漏らします。' },
            { words: [{ en: 'mouse', ja: 'ネズミ', phonetic: '/maʊs/' }, { en: 'mouth', ja: '口', phonetic: '/maʊθ/' }], explanation: 'Mickey Mouse が Mickey Mouth にならないように！' },
            { words: [{ en: 'see', ja: '見る', phonetic: '/siː/' }, { en: 'she', ja: '彼女は', phonetic: '/ʃiː/' }, { en: 'sea', ja: '海', phonetic: '/siː/' }], explanation: 'Sは口を横に引き、SHは唇を丸く突き出します。seeとseaは同音。' },
            { words: [{ en: 'seat', ja: '座席', phonetic: '/siːt/' }, { en: 'sheet', ja: 'シーツ・紙', phonetic: '/ʃiːt/' }], explanation: 'seat をお願いする時に、sheet と発音しないよう注意。' },
            { words: [{ en: 'thick', ja: '厚い', phonetic: '/θɪk/' }, { en: 'sick', ja: '病気の', phonetic: '/sɪk/' }], explanation: 'I am sick. (病気です)と言う時に、thickと発音しないように。' },
            { words: [{ en: 'sign', ja: '署名', phonetic: '/saɪn/' }, { en: 'shine', ja: '輝く', phonetic: '/ʃaɪn/' }], explanation: 'SとSHの違い。' },
            { words: [{ en: 'sip', ja: 'すする', phonetic: '/sɪp/' }, { en: 'ship', ja: '船', phonetic: '/ʃɪp/' }], explanation: 'SとSHの違い。' },
            { words: [{ en: 'same', ja: '同じ', phonetic: '/seɪm/' }, { en: 'shame', ja: '恥', phonetic: '/ʃeɪm/' }], explanation: 'SとSHの違い。' },
            { words: [{ en: 'save', ja: '救う・保存', phonetic: '/seɪv/' }, { en: 'shave', ja: '髭を剃る', phonetic: '/ʃeɪv/' }], explanation: 'SとSHの違い。' },
            { words: [{ en: 'sort', ja: '種類', phonetic: '/sɔːrt/' }, { en: 'short', ja: '短い', phonetic: '/ʃɔːrt/' }], explanation: 'SとSHの違い。' },
            { words: [{ en: 'ass', ja: 'ロバ・お尻(スラング)', phonetic: '/æs/' }, { en: 'ash', ja: '灰', phonetic: '/æʃ/' }], explanation: '語尾のSとSHの違い。' },
            { words: [{ en: 'mass', ja: '塊・大衆', phonetic: '/mæs/' }, { en: 'mash', ja: 'すりつぶす', phonetic: '/mæʃ/' }], explanation: '語尾のSとSHの違い。' },
            { words: [{ en: 'pass', ja: '通過する', phonetic: '/pæs/' }, { en: 'path', ja: '小道', phonetic: '/pæθ/' }], explanation: '語尾のSとTHの違い。' },
            { words: [{ en: 'breeze', ja: 'そよ風', phonetic: '/briːz/' }, { en: 'breathe', ja: '呼吸する', phonetic: '/briːð/' }], explanation: 'Zと濁るTH(ð)の違い。' },
            { words: [{ en: 'close', ja: '閉める(動詞)', phonetic: '/kloʊz/' }, { en: 'clothe', ja: '服を着せる', phonetic: '/kloʊð/' }], explanation: 'Zと濁るTH(ð)の違い。（※形容詞のcloseは/kloʊs/）' }
        ]
    },
    {
        category: 'F と H の違い',
        pairs: [
            { words: [{ en: 'food', ja: '食べ物', phonetic: '/fuːd/' }, { en: 'hood', ja: 'フード(服の)', phonetic: '/hʊd/' }], explanation: 'Fは下唇を軽く噛んで「フ」、Hは喉の奥から息を出して「フ」と発音。' },
            { words: [{ en: 'fold', ja: '折りたたむ', phonetic: '/foʊld/' }, { en: 'hold', ja: '持つ', phonetic: '/hoʊld/' }], explanation: 'Fは摩擦音、Hは気音です。' },
            { words: [{ en: 'fear', ja: '恐怖', phonetic: '/fɪr/' }, { en: 'hear', ja: '聞こえる', phonetic: '/hɪr/' }], explanation: 'I can hear you が I can fear you にならないように。' },
            { words: [{ en: 'fat', ja: '太った', phonetic: '/fæt/' }, { en: 'hat', ja: '帽子', phonetic: '/hæt/' }], explanation: 'FとHの違い。' },
            { words: [{ en: 'fin', ja: 'ヒレ', phonetic: '/fɪn/' }, { en: 'hin', ja: 'ヒン(固有名詞等)', phonetic: '/hɪn/' }], explanation: 'FとHの違い。' },
            { words: [{ en: 'fit', ja: '合う', phonetic: '/fɪt/' }, { en: 'hit', ja: '打つ', phonetic: '/hɪt/' }], explanation: 'FとHの違い。' },
            { words: [{ en: 'fee', ja: '料金', phonetic: '/fiː/' }, { en: 'he', ja: '彼', phonetic: '/hiː/' }], explanation: 'FとHの違い。' }
        ]
    },
    {
        category: 'W と ウ の発音',
        pairs: [
            { words: [{ en: 'wood', ja: '木材', phonetic: '/wʊd/' }, { en: 'would', ja: '〜だろう', phonetic: '/wʊd/' }, { en: 'hood', ja: 'フード', phonetic: '/hʊd/' }], explanation: 'Wの音は唇をタコのように丸く突き出してから発音。woodとwouldは全く同じ発音。' },
            { words: [{ en: 'woman', ja: '女性(単数)', phonetic: '/ˈwʊmən/' }, { en: 'women', ja: '女性(複数)', phonetic: '/ˈwɪmɪn/' }], explanation: 'スペルに騙されやすい単語。複数は「ウィミン」のように発音。' },
            { words: [{ en: 'warm', ja: '暖かい', phonetic: '/wɔːrm/' }, { en: 'worm', ja: 'ミミズ・虫', phonetic: '/wɜːrm/' }], explanation: 'warmは縦に口を開ける「ウォーム」、wormは口を開けない「ワーム」。' },
            { words: [{ en: 'west', ja: '西', phonetic: '/west/' }, { en: 'vest', ja: 'ベスト', phonetic: '/vest/' }], explanation: 'W(唇を丸める)とV(下唇を軽く噛む)の違い。' },
            { words: [{ en: 'wet', ja: '濡れた', phonetic: '/wet/' }, { en: 'vet', ja: '獣医', phonetic: '/vet/' }], explanation: 'WとVの違い。' },
            { words: [{ en: 'wine', ja: 'ワイン', phonetic: '/waɪn/' }, { en: 'vine', ja: 'つる植物', phonetic: '/vaɪn/' }], explanation: 'WとVの違い。' }
        ]
    },
    {
        category: '母音の長さ（アイイ/イー）',
        pairs: [
            { words: [{ en: 'sit', ja: '座る', phonetic: '/sɪt/' }, { en: 'seat', ja: '座席', phonetic: '/siːt/' }], explanation: 'sitは短く、seatは長く「イー」と伸ばします。' },
            { words: [{ en: 'ship', ja: '船', phonetic: '/ʃɪp/' }, { en: 'sheep', ja: '羊', phonetic: '/ʃiːp/' }], explanation: '「イ」と「イー」の音の質の違い。' },
            { words: [{ en: 'live', ja: '住む・生きる', phonetic: '/lɪv/' }, { en: 'leave', ja: '去る・残す', phonetic: '/liːv/' }], explanation: 'I live here(住む) と I leave here(去る) では真逆の意味に。' },
            { words: [{ en: 'hit', ja: '打つ', phonetic: '/hɪt/' }, { en: 'heat', ja: '熱', phonetic: '/hiːt/' }], explanation: 'hitは短く、heatは長く。' },
            { words: [{ en: 'fit', ja: '合う', phonetic: '/fɪt/' }, { en: 'feet', ja: '足(複数)', phonetic: '/fiːt/' }], explanation: 'These shoes fit (サイズが合う) と These shoes feet の違い。' },
            { words: [{ en: 'fill', ja: '満たす', phonetic: '/fɪl/' }, { en: 'feel', ja: '感じる', phonetic: '/fiːl/' }], explanation: '短母音と長母音。' },
            { words: [{ en: 'pill', ja: '錠剤', phonetic: '/pɪl/' }, { en: 'peel', ja: '皮をむく', phonetic: '/piːl/' }], explanation: '短母音と長母音。' },
            { words: [{ en: 'slip', ja: '滑る', phonetic: '/slɪp/' }, { en: 'sleep', ja: '眠る', phonetic: '/sliːp/' }], explanation: '短母音と長母音。' },
            { words: [{ en: 'pitch', ja: '投げる・ピッチ', phonetic: '/pɪtʃ/' }, { en: 'peach', ja: '桃', phonetic: '/piːtʃ/' }], explanation: '短母音と長母音。' },
            { words: [{ en: 'rich', ja: '豊かな', phonetic: '/rɪtʃ/' }, { en: 'reach', ja: '届く', phonetic: '/riːtʃ/' }], explanation: '短母音と長母音。' }
        ]
    },
    {
        category: 'アクセント（名前動後・イントネーション）',
        pairs: [
            { words: [{ en: 'DE-sert', ja: '砂漠', phonetic: '/ˈdezərt/' }, { en: 'de-SSERT', ja: 'デザート（食後）', phonetic: '/dɪˈzɜːrt/' }], explanation: '砂漠は前に、デザートは後ろにストレスを置きます。' },
            { words: [{ en: 'PRE-sent', ja: 'プレゼント(名詞)', phonetic: '/ˈpreznt/' }, { en: 'pre-SENT', ja: '〜を贈る(動詞)', phonetic: '/prɪˈzent/' }], explanation: '名詞は前、動詞は後ろにアクセントを置く「名前動後（めいぜんどうご）」。' },
            { words: [{ en: 'RE-cord', ja: '記録(名詞)', phonetic: '/ˈrekərd/' }, { en: 're-CORD', ja: '記録する(動詞)', phonetic: '/rɪˈkɔːrd/' }], explanation: '名詞は「レコード」、動詞は「リコード」のように音も変化。' },
            { words: [{ en: 'OB-ject', ja: '物体(名詞)', phonetic: '/ˈɑːbdʒekt/' }, { en: 'ob-JECT', ja: '反対する(動詞)', phonetic: '/əbˈdʒekt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'PRO-duce', ja: '農産物(名詞)', phonetic: '/ˈproʊduːs/' }, { en: 'pro-DUCE', ja: '生産する(動詞)', phonetic: '/prəˈduːs/' }], explanation: '名詞は「プロデュース」と前を強く、動詞は後ろ。' },
            { words: [{ en: 'PRO-ject', ja: '計画(名詞)', phonetic: '/ˈprɑːdʒekt/' }, { en: 'pro-JECT', ja: '投影する(動詞)', phonetic: '/prəˈdʒekt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'CON-duct', ja: '行い(名詞)', phonetic: '/ˈkɑːndʌkt/' }, { en: 'con-DUCT', ja: '導く(動詞)', phonetic: '/kənˈdʌkt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'CON-tract', ja: '契約(名詞)', phonetic: '/ˈkɑːntrækt/' }, { en: 'con-TRACT', ja: '契約する(動詞)', phonetic: '/kənˈtrækt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'CON-flict', ja: '対立(名詞)', phonetic: '/ˈkɑːnflɪkt/' }, { en: 'con-FLICT', ja: '対立する(動詞)', phonetic: '/kənˈflɪkt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'PER-mit', ja: '許可証(名詞)', phonetic: '/ˈpɜːrmɪt/' }, { en: 'per-MIT', ja: '許可する(動詞)', phonetic: '/pərˈmɪt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'SUS-pect', ja: '容疑者(名詞)', phonetic: '/ˈsʌspekt/' }, { en: 'sus-PECT', ja: '疑う(動詞)', phonetic: '/səˈspekt/' }], explanation: '名前動後のルール。' },
            { words: [{ en: 'RE-bel', ja: '反逆者(名詞)', phonetic: '/ˈrebl/' }, { en: 're-BEL', ja: '反逆する(動詞)', phonetic: '/rɪˈbel/' }], explanation: '名前動後のルール。' }
        ]
    }
];
