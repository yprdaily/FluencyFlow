"""
FluencyFlow - 初期辞書データ投入スクリプト
CEFRレベル(A1〜C1)に分類された数千語の英単語を一括でSQLiteに投入する。
"""

from dictionary_service import dictionary_service

# =============================================================================
# SEED DATA: A1 (超基礎 〜200語)
# =============================================================================
A1_WORDS = [
    {"word": "a", "ja": "1つの", "pos": "冠詞", "phonetic": "/ə/", "example": "I have a book.", "example_ja": "本を1冊持っています。"},
    {"word": "about", "ja": "〜について", "pos": "前置詞", "phonetic": "/əˈbaʊt/", "example": "Tell me about yourself.", "example_ja": "あなたのことを教えてください。"},
    {"word": "after", "ja": "〜の後に", "pos": "前置詞", "phonetic": "/ˈæftər/", "example": "After lunch, let's go.", "example_ja": "昼食の後に行きましょう。"},
    {"word": "again", "ja": "もう一度", "pos": "副詞", "phonetic": "/əˈɡen/", "example": "Please say that again.", "example_ja": "もう一度言ってください。"},
    {"word": "all", "ja": "全部の", "pos": "形容詞", "phonetic": "/ɔːl/", "example": "All people are equal.", "example_ja": "全ての人は平等です。"},
    {"word": "also", "ja": "〜もまた", "pos": "副詞", "phonetic": "/ˈɔːlsoʊ/", "example": "I also like coffee.", "example_ja": "私もコーヒーが好きです。"},
    {"word": "always", "ja": "いつも", "pos": "副詞", "phonetic": "/ˈɔːlweɪz/", "example": "I always wake up early.", "example_ja": "私はいつも早く起きます。"},
    {"word": "and", "ja": "そして", "pos": "接続詞", "phonetic": "/ænd/", "example": "I like cats and dogs.", "example_ja": "猫と犬が好きです。"},
    {"word": "animal", "ja": "動物", "pos": "名詞", "phonetic": "/ˈænɪml/", "example": "What is your favorite animal?", "example_ja": "好きな動物は何ですか？"},
    {"word": "apple", "ja": "りんご", "pos": "名詞", "phonetic": "/ˈæpl/", "example": "I ate an apple.", "example_ja": "りんごを食べました。"},
    {"word": "at", "ja": "〜に", "pos": "前置詞", "phonetic": "/æt/", "example": "I am at home.", "example_ja": "家にいます。"},
    {"word": "bad", "ja": "悪い", "pos": "形容詞", "phonetic": "/bæd/", "example": "That was a bad idea.", "example_ja": "あれは悪い考えでした。"},
    {"word": "bag", "ja": "かばん", "pos": "名詞", "phonetic": "/bæɡ/", "example": "Where is my bag?", "example_ja": "かばんはどこですか？"},
    {"word": "be", "ja": "〜である", "pos": "動詞", "phonetic": "/biː/", "example": "I want to be happy.", "example_ja": "幸せでありたい。"},
    {"word": "beautiful", "ja": "美しい", "pos": "形容詞", "phonetic": "/ˈbjuːtɪfl/", "example": "The sunset is beautiful.", "example_ja": "夕日が美しいです。"},
    {"word": "because", "ja": "なぜなら", "pos": "接続詞", "phonetic": "/bɪˈkɔːz/", "example": "I stayed home because it rained.", "example_ja": "雨が降ったので家にいました。"},
    {"word": "before", "ja": "〜の前に", "pos": "前置詞", "phonetic": "/bɪˈfɔːr/", "example": "Wash your hands before eating.", "example_ja": "食べる前に手を洗ってください。"},
    {"word": "big", "ja": "大きい", "pos": "形容詞", "phonetic": "/bɪɡ/", "example": "That is a big house.", "example_ja": "あれは大きな家です。"},
    {"word": "book", "ja": "本", "pos": "名詞", "phonetic": "/bʊk/", "example": "I am reading a book.", "example_ja": "本を読んでいます。"},
    {"word": "boy", "ja": "男の子", "pos": "名詞", "phonetic": "/bɔɪ/", "example": "The boy is running.", "example_ja": "男の子が走っています。"},
    {"word": "brother", "ja": "兄・弟", "pos": "名詞", "phonetic": "/ˈbrʌðər/", "example": "My brother is tall.", "example_ja": "私の兄(弟)は背が高いです。"},
    {"word": "but", "ja": "しかし", "pos": "接続詞", "phonetic": "/bʌt/", "example": "I tried, but I failed.", "example_ja": "やってみましたが、失敗しました。"},
    {"word": "buy", "ja": "買う", "pos": "動詞", "phonetic": "/baɪ/", "example": "I want to buy a new phone.", "example_ja": "新しいスマホを買いたい。"},
    {"word": "call", "ja": "呼ぶ・電話する", "pos": "動詞", "phonetic": "/kɔːl/", "example": "Please call me later.", "example_ja": "あとで電話してください。"},
    {"word": "can", "ja": "〜できる", "pos": "助動詞", "phonetic": "/kæn/", "example": "I can swim.", "example_ja": "泳げます。"},
    {"word": "car", "ja": "車", "pos": "名詞", "phonetic": "/kɑːr/", "example": "He drives a red car.", "example_ja": "彼は赤い車を運転しています。"},
    {"word": "cat", "ja": "猫", "pos": "名詞", "phonetic": "/kæt/", "example": "The cat is sleeping.", "example_ja": "猫が寝ています。"},
    {"word": "child", "ja": "子供", "pos": "名詞", "phonetic": "/tʃaɪld/", "example": "The child is playing.", "example_ja": "子供が遊んでいます。"},
    {"word": "city", "ja": "都市", "pos": "名詞", "phonetic": "/ˈsɪti/", "example": "Tokyo is a big city.", "example_ja": "東京は大きな都市です。"},
    {"word": "close", "ja": "閉める", "pos": "動詞", "phonetic": "/kloʊz/", "example": "Please close the door.", "example_ja": "ドアを閉めてください。"},
    {"word": "cold", "ja": "寒い・冷たい", "pos": "形容詞", "phonetic": "/koʊld/", "example": "It is very cold today.", "example_ja": "今日はとても寒いです。"},
    {"word": "come", "ja": "来る", "pos": "動詞", "phonetic": "/kʌm/", "example": "Come here, please.", "example_ja": "こちらに来てください。"},
    {"word": "cook", "ja": "料理する", "pos": "動詞", "phonetic": "/kʊk/", "example": "I like to cook.", "example_ja": "料理をするのが好きです。"},
    {"word": "could", "ja": "〜できた", "pos": "助動詞", "phonetic": "/kʊd/", "example": "Could you help me?", "example_ja": "手伝ってもらえますか？"},
    {"word": "country", "ja": "国", "pos": "名詞", "phonetic": "/ˈkʌntri/", "example": "Japan is a beautiful country.", "example_ja": "日本は美しい国です。"},
    {"word": "day", "ja": "日", "pos": "名詞", "phonetic": "/deɪ/", "example": "What day is it today?", "example_ja": "今日は何曜日ですか？"},
    {"word": "different", "ja": "異なる", "pos": "形容詞", "phonetic": "/ˈdɪfrənt/", "example": "We are all different.", "example_ja": "私たちはみんな違います。"},
    {"word": "do", "ja": "する", "pos": "動詞", "phonetic": "/duː/", "example": "What do you do?", "example_ja": "お仕事は何をしていますか？"},
    {"word": "dog", "ja": "犬", "pos": "名詞", "phonetic": "/dɔːɡ/", "example": "I have a dog.", "example_ja": "犬を飼っています。"},
    {"word": "door", "ja": "ドア", "pos": "名詞", "phonetic": "/dɔːr/", "example": "Open the door.", "example_ja": "ドアを開けてください。"},
    {"word": "down", "ja": "下に", "pos": "副詞", "phonetic": "/daʊn/", "example": "Sit down, please.", "example_ja": "座ってください。"},
    {"word": "drink", "ja": "飲む", "pos": "動詞", "phonetic": "/drɪŋk/", "example": "I want to drink water.", "example_ja": "水が飲みたい。"},
    {"word": "eat", "ja": "食べる", "pos": "動詞", "phonetic": "/iːt/", "example": "Let's eat lunch.", "example_ja": "昼ごはんを食べましょう。"},
    {"word": "eight", "ja": "8", "pos": "数詞", "phonetic": "/eɪt/", "example": "I have eight books.", "example_ja": "本を8冊持っています。"},
    {"word": "English", "ja": "英語", "pos": "名詞", "phonetic": "/ˈɪŋɡlɪʃ/", "example": "I am studying English.", "example_ja": "英語を勉強しています。"},
    {"word": "enjoy", "ja": "楽しむ", "pos": "動詞", "phonetic": "/ɪnˈdʒɔɪ/", "example": "I enjoy reading.", "example_ja": "読書を楽しんでいます。"},
    {"word": "every", "ja": "毎〜", "pos": "形容詞", "phonetic": "/ˈevri/", "example": "I exercise every day.", "example_ja": "毎日運動しています。"},
    {"word": "family", "ja": "家族", "pos": "名詞", "phonetic": "/ˈfæməli/", "example": "I love my family.", "example_ja": "家族を愛しています。"},
    {"word": "father", "ja": "父", "pos": "名詞", "phonetic": "/ˈfɑːðər/", "example": "My father is a teacher.", "example_ja": "父は教師です。"},
    {"word": "find", "ja": "見つける", "pos": "動詞", "phonetic": "/faɪnd/", "example": "I can't find my keys.", "example_ja": "鍵が見つかりません。"},
    {"word": "first", "ja": "最初の", "pos": "形容詞", "phonetic": "/fɜːrst/", "example": "This is my first time.", "example_ja": "これが初めてです。"},
    {"word": "five", "ja": "5", "pos": "数詞", "phonetic": "/faɪv/", "example": "I have five friends.", "example_ja": "友達が5人います。"},
    {"word": "food", "ja": "食べ物", "pos": "名詞", "phonetic": "/fuːd/", "example": "The food is delicious.", "example_ja": "料理が美味しいです。"},
    {"word": "for", "ja": "〜のために", "pos": "前置詞", "phonetic": "/fɔːr/", "example": "This gift is for you.", "example_ja": "このプレゼントはあなたのためです。"},
    {"word": "four", "ja": "4", "pos": "数詞", "phonetic": "/fɔːr/", "example": "There are four seasons.", "example_ja": "四季があります。"},
    {"word": "friend", "ja": "友達", "pos": "名詞", "phonetic": "/frend/", "example": "She is my best friend.", "example_ja": "彼女は私の親友です。"},
    {"word": "from", "ja": "〜から", "pos": "前置詞", "phonetic": "/frʌm/", "example": "I am from Japan.", "example_ja": "日本から来ました。"},
    {"word": "get", "ja": "得る", "pos": "動詞", "phonetic": "/ɡet/", "example": "I need to get some sleep.", "example_ja": "少し寝なければなりません。"},
    {"word": "girl", "ja": "女の子", "pos": "名詞", "phonetic": "/ɡɜːrl/", "example": "The girl is smiling.", "example_ja": "女の子が笑っています。"},
    {"word": "give", "ja": "あげる", "pos": "動詞", "phonetic": "/ɡɪv/", "example": "Please give me a chance.", "example_ja": "チャンスをください。"},
    {"word": "go", "ja": "行く", "pos": "動詞", "phonetic": "/ɡoʊ/", "example": "Let's go to the park.", "example_ja": "公園に行きましょう。"},
    {"word": "good", "ja": "良い", "pos": "形容詞", "phonetic": "/ɡʊd/", "example": "That's a good idea.", "example_ja": "それはいい考えですね。"},
    {"word": "great", "ja": "すごい", "pos": "形容詞", "phonetic": "/ɡreɪt/", "example": "You did a great job!", "example_ja": "素晴らしい仕事でしたね！"},
    {"word": "green", "ja": "緑", "pos": "形容詞", "phonetic": "/ɡriːn/", "example": "The grass is green.", "example_ja": "草は緑色です。"},
    {"word": "happy", "ja": "幸せな", "pos": "形容詞", "phonetic": "/ˈhæpi/", "example": "I am very happy.", "example_ja": "とても幸せです。"},
    {"word": "have", "ja": "持っている", "pos": "動詞", "phonetic": "/hæv/", "example": "I have two sisters.", "example_ja": "姉妹が2人います。"},
    {"word": "he", "ja": "彼は", "pos": "代名詞", "phonetic": "/hiː/", "example": "He is my friend.", "example_ja": "彼は私の友達です。"},
    {"word": "hello", "ja": "こんにちは", "pos": "感嘆詞", "phonetic": "/həˈloʊ/", "example": "Hello! How are you?", "example_ja": "こんにちは！元気ですか？"},
    {"word": "help", "ja": "助ける", "pos": "動詞", "phonetic": "/help/", "example": "Can you help me?", "example_ja": "手伝ってもらえますか？"},
    {"word": "here", "ja": "ここ", "pos": "副詞", "phonetic": "/hɪr/", "example": "Come here.", "example_ja": "ここに来てください。"},
    {"word": "home", "ja": "家", "pos": "名詞", "phonetic": "/hoʊm/", "example": "I am going home.", "example_ja": "家に帰ります。"},
    {"word": "hot", "ja": "暑い・熱い", "pos": "形容詞", "phonetic": "/hɑːt/", "example": "It is very hot today.", "example_ja": "今日はとても暑いです。"},
    {"word": "house", "ja": "家", "pos": "名詞", "phonetic": "/haʊs/", "example": "This is my house.", "example_ja": "これは私の家です。"},
    {"word": "how", "ja": "どうやって", "pos": "副詞", "phonetic": "/haʊ/", "example": "How are you?", "example_ja": "元気ですか？"},
    {"word": "hundred", "ja": "百", "pos": "数詞", "phonetic": "/ˈhʌndrəd/", "example": "I ran a hundred meters.", "example_ja": "100メートル走りました。"},
    {"word": "i", "ja": "私は", "pos": "代名詞", "phonetic": "/aɪ/", "example": "I am a student.", "example_ja": "私は学生です。"},
    {"word": "in", "ja": "〜の中に", "pos": "前置詞", "phonetic": "/ɪn/", "example": "The key is in the box.", "example_ja": "鍵は箱の中にあります。"},
    {"word": "interesting", "ja": "面白い", "pos": "形容詞", "phonetic": "/ˈɪntrəstɪŋ/", "example": "That movie was interesting.", "example_ja": "あの映画は面白かったです。"},
    {"word": "is", "ja": "〜です", "pos": "動詞", "phonetic": "/ɪz/", "example": "She is a doctor.", "example_ja": "彼女は医者です。"},
    {"word": "it", "ja": "それ", "pos": "代名詞", "phonetic": "/ɪt/", "example": "It is raining.", "example_ja": "雨が降っています。"},
    {"word": "just", "ja": "ちょうど・ただ", "pos": "副詞", "phonetic": "/dʒʌst/", "example": "I just arrived.", "example_ja": "今ちょうど着きました。"},
    {"word": "know", "ja": "知っている", "pos": "動詞", "phonetic": "/noʊ/", "example": "I know the answer.", "example_ja": "答えを知っています。"},
    {"word": "last", "ja": "最後の", "pos": "形容詞", "phonetic": "/læst/", "example": "This is the last one.", "example_ja": "これが最後です。"},
    {"word": "left", "ja": "左", "pos": "名詞", "phonetic": "/left/", "example": "Turn left here.", "example_ja": "ここを左に曲がってください。"},
    {"word": "like", "ja": "好き", "pos": "動詞", "phonetic": "/laɪk/", "example": "I like music.", "example_ja": "音楽が好きです。"},
    {"word": "live", "ja": "住む", "pos": "動詞", "phonetic": "/lɪv/", "example": "I live in Tokyo.", "example_ja": "東京に住んでいます。"},
    {"word": "long", "ja": "長い", "pos": "形容詞", "phonetic": "/lɔːŋ/", "example": "It was a long day.", "example_ja": "長い1日でした。"},
    {"word": "look", "ja": "見る", "pos": "動詞", "phonetic": "/lʊk/", "example": "Look at that bird!", "example_ja": "あの鳥を見て！"},
    {"word": "love", "ja": "愛する", "pos": "動詞", "phonetic": "/lʌv/", "example": "I love you.", "example_ja": "あなたを愛しています。"},
    {"word": "make", "ja": "作る", "pos": "動詞", "phonetic": "/meɪk/", "example": "I will make dinner.", "example_ja": "夕食を作ります。"},
    {"word": "man", "ja": "男性", "pos": "名詞", "phonetic": "/mæn/", "example": "The man is kind.", "example_ja": "その男の人は優しいです。"},
    {"word": "many", "ja": "たくさんの", "pos": "形容詞", "phonetic": "/ˈmeni/", "example": "There are many stars.", "example_ja": "たくさんの星があります。"},
    {"word": "money", "ja": "お金", "pos": "名詞", "phonetic": "/ˈmʌni/", "example": "I need some money.", "example_ja": "少しお金が必要です。"},
    {"word": "more", "ja": "もっと", "pos": "副詞", "phonetic": "/mɔːr/", "example": "I want more time.", "example_ja": "もっと時間が欲しい。"},
    {"word": "morning", "ja": "朝", "pos": "名詞", "phonetic": "/ˈmɔːrnɪŋ/", "example": "Good morning!", "example_ja": "おはようございます！"},
    {"word": "mother", "ja": "母", "pos": "名詞", "phonetic": "/ˈmʌðər/", "example": "My mother cooks well.", "example_ja": "母は料理が上手です。"},
    {"word": "much", "ja": "たくさん", "pos": "副詞", "phonetic": "/mʌtʃ/", "example": "Thank you very much.", "example_ja": "どうもありがとうございます。"},
    {"word": "music", "ja": "音楽", "pos": "名詞", "phonetic": "/ˈmjuːzɪk/", "example": "I listen to music.", "example_ja": "音楽を聴きます。"},
    {"word": "my", "ja": "私の", "pos": "代名詞", "phonetic": "/maɪ/", "example": "This is my room.", "example_ja": "これは私の部屋です。"},
    {"word": "name", "ja": "名前", "pos": "名詞", "phonetic": "/neɪm/", "example": "What is your name?", "example_ja": "お名前は何ですか？"},
    {"word": "need", "ja": "必要とする", "pos": "動詞", "phonetic": "/niːd/", "example": "I need your help.", "example_ja": "あなたの助けが必要です。"},
    {"word": "new", "ja": "新しい", "pos": "形容詞", "phonetic": "/nuː/", "example": "I bought a new shirt.", "example_ja": "新しいシャツを買いました。"},
    {"word": "night", "ja": "夜", "pos": "名詞", "phonetic": "/naɪt/", "example": "Good night!", "example_ja": "おやすみなさい！"},
    {"word": "no", "ja": "いいえ", "pos": "感嘆詞", "phonetic": "/noʊ/", "example": "No, thank you.", "example_ja": "いいえ、結構です。"},
    {"word": "not", "ja": "〜ではない", "pos": "副詞", "phonetic": "/nɑːt/", "example": "I am not tired.", "example_ja": "疲れていません。"},
    {"word": "now", "ja": "今", "pos": "副詞", "phonetic": "/naʊ/", "example": "I am busy now.", "example_ja": "今忙しいです。"},
    {"word": "number", "ja": "数字", "pos": "名詞", "phonetic": "/ˈnʌmbər/", "example": "What is your phone number?", "example_ja": "電話番号は何ですか？"},
    {"word": "of", "ja": "〜の", "pos": "前置詞", "phonetic": "/ʌv/", "example": "A cup of coffee.", "example_ja": "一杯のコーヒー。"},
    {"word": "old", "ja": "古い・年をとった", "pos": "形容詞", "phonetic": "/oʊld/", "example": "How old are you?", "example_ja": "何歳ですか？"},
    {"word": "one", "ja": "1つ", "pos": "数詞", "phonetic": "/wʌn/", "example": "I have one question.", "example_ja": "質問が1つあります。"},
    {"word": "open", "ja": "開ける", "pos": "動詞", "phonetic": "/ˈoʊpən/", "example": "Open the window.", "example_ja": "窓を開けてください。"},
    {"word": "or", "ja": "または", "pos": "接続詞", "phonetic": "/ɔːr/", "example": "Tea or coffee?", "example_ja": "紅茶かコーヒーか？"},
    {"word": "people", "ja": "人々", "pos": "名詞", "phonetic": "/ˈpiːpl/", "example": "Many people came.", "example_ja": "たくさんの人が来ました。"},
    {"word": "place", "ja": "場所", "pos": "名詞", "phonetic": "/pleɪs/", "example": "This is a nice place.", "example_ja": "ここは良い場所ですね。"},
    {"word": "play", "ja": "遊ぶ", "pos": "動詞", "phonetic": "/pleɪ/", "example": "Let's play together.", "example_ja": "一緒に遊びましょう。"},
    {"word": "please", "ja": "どうぞ", "pos": "副詞", "phonetic": "/pliːz/", "example": "Please sit down.", "example_ja": "どうぞお座りください。"},
    {"word": "put", "ja": "置く", "pos": "動詞", "phonetic": "/pʊt/", "example": "Put it on the table.", "example_ja": "テーブルの上に置いてください。"},
    {"word": "question", "ja": "質問", "pos": "名詞", "phonetic": "/ˈkwestʃən/", "example": "I have a question.", "example_ja": "質問があります。"},
    {"word": "read", "ja": "読む", "pos": "動詞", "phonetic": "/riːd/", "example": "I like to read books.", "example_ja": "本を読むのが好きです。"},
    {"word": "red", "ja": "赤い", "pos": "形容詞", "phonetic": "/red/", "example": "She has a red dress.", "example_ja": "彼女は赤いドレスを持っています。"},
    {"word": "right", "ja": "右", "pos": "名詞", "phonetic": "/raɪt/", "example": "Turn right.", "example_ja": "右に曲がってください。"},
    {"word": "run", "ja": "走る", "pos": "動詞", "phonetic": "/rʌn/", "example": "I run every morning.", "example_ja": "毎朝走ります。"},
    {"word": "said", "ja": "言った(過去)", "pos": "動詞", "phonetic": "/sed/", "example": "He said hello.", "example_ja": "彼はこんにちはと言いました。"},
    {"word": "same", "ja": "同じ", "pos": "形容詞", "phonetic": "/seɪm/", "example": "We are the same age.", "example_ja": "私たちは同い年です。"},
    {"word": "say", "ja": "言う", "pos": "動詞", "phonetic": "/seɪ/", "example": "What did you say?", "example_ja": "何と言いましたか？"},
    {"word": "school", "ja": "学校", "pos": "名詞", "phonetic": "/skuːl/", "example": "I go to school.", "example_ja": "学校に行きます。"},
    {"word": "see", "ja": "見える", "pos": "動詞", "phonetic": "/siː/", "example": "I can see the mountain.", "example_ja": "山が見えます。"},
    {"word": "she", "ja": "彼女は", "pos": "代名詞", "phonetic": "/ʃiː/", "example": "She is my sister.", "example_ja": "彼女は私の姉妹です。"},
    {"word": "sister", "ja": "姉・妹", "pos": "名詞", "phonetic": "/ˈsɪstər/", "example": "I have one sister.", "example_ja": "姉妹が1人います。"},
    {"word": "sit", "ja": "座る", "pos": "動詞", "phonetic": "/sɪt/", "example": "Sit down, please.", "example_ja": "お座りください。"},
    {"word": "six", "ja": "6", "pos": "数詞", "phonetic": "/sɪks/", "example": "I wake up at six.", "example_ja": "6時に起きます。"},
    {"word": "sleep", "ja": "眠る", "pos": "動詞", "phonetic": "/sliːp/", "example": "I need to sleep.", "example_ja": "眠らなければなりません。"},
    {"word": "small", "ja": "小さい", "pos": "形容詞", "phonetic": "/smɔːl/", "example": "It is a small world.", "example_ja": "世界は狭いですね。"},
    {"word": "some", "ja": "いくつかの", "pos": "形容詞", "phonetic": "/sʌm/", "example": "I want some water.", "example_ja": "水が少し欲しいです。"},
    {"word": "something", "ja": "何か", "pos": "代名詞", "phonetic": "/ˈsʌmθɪŋ/", "example": "I want something to eat.", "example_ja": "何か食べたいです。"},
    {"word": "sorry", "ja": "ごめんなさい", "pos": "形容詞", "phonetic": "/ˈsɑːri/", "example": "I am sorry.", "example_ja": "ごめんなさい。"},
    {"word": "speak", "ja": "話す", "pos": "動詞", "phonetic": "/spiːk/", "example": "Do you speak English?", "example_ja": "英語を話しますか？"},
    {"word": "start", "ja": "始める", "pos": "動詞", "phonetic": "/stɑːrt/", "example": "Let's start.", "example_ja": "始めましょう。"},
    {"word": "stop", "ja": "止まる", "pos": "動詞", "phonetic": "/stɑːp/", "example": "Please stop.", "example_ja": "止まってください。"},
    {"word": "student", "ja": "学生", "pos": "名詞", "phonetic": "/ˈstuːdnt/", "example": "I am a student.", "example_ja": "私は学生です。"},
    {"word": "take", "ja": "取る", "pos": "動詞", "phonetic": "/teɪk/", "example": "Take your time.", "example_ja": "ゆっくりどうぞ。"},
    {"word": "tell", "ja": "伝える", "pos": "動詞", "phonetic": "/tel/", "example": "Tell me the truth.", "example_ja": "本当のことを教えてください。"},
    {"word": "ten", "ja": "10", "pos": "数詞", "phonetic": "/ten/", "example": "I have ten fingers.", "example_ja": "指は10本あります。"},
    {"word": "thank", "ja": "感謝する", "pos": "動詞", "phonetic": "/θæŋk/", "example": "Thank you!", "example_ja": "ありがとう！"},
    {"word": "that", "ja": "あれ", "pos": "代名詞", "phonetic": "/ðæt/", "example": "What is that?", "example_ja": "あれは何ですか？"},
    {"word": "the", "ja": "その", "pos": "冠詞", "phonetic": "/ðə/", "example": "The sky is blue.", "example_ja": "空は青い。"},
    {"word": "their", "ja": "彼らの", "pos": "代名詞", "phonetic": "/ðer/", "example": "Their house is big.", "example_ja": "彼らの家は大きいです。"},
    {"word": "them", "ja": "彼らを", "pos": "代名詞", "phonetic": "/ðem/", "example": "I saw them.", "example_ja": "彼らに会いました。"},
    {"word": "then", "ja": "それから", "pos": "副詞", "phonetic": "/ðen/", "example": "Then what happened?", "example_ja": "それからどうなりましたか？"},
    {"word": "there", "ja": "そこに", "pos": "副詞", "phonetic": "/ðer/", "example": "I will be there.", "example_ja": "そこにいます。"},
    {"word": "they", "ja": "彼らは", "pos": "代名詞", "phonetic": "/ðeɪ/", "example": "They are coming.", "example_ja": "彼らが来ます。"},
    {"word": "thing", "ja": "もの", "pos": "名詞", "phonetic": "/θɪŋ/", "example": "What is this thing?", "example_ja": "これは何ですか？"},
    {"word": "think", "ja": "思う", "pos": "動詞", "phonetic": "/θɪŋk/", "example": "I think so.", "example_ja": "そう思います。"},
    {"word": "this", "ja": "これ", "pos": "代名詞", "phonetic": "/ðɪs/", "example": "This is mine.", "example_ja": "これは私のです。"},
    {"word": "three", "ja": "3", "pos": "数詞", "phonetic": "/θriː/", "example": "I have three cats.", "example_ja": "猫を3匹飼っています。"},
    {"word": "time", "ja": "時間", "pos": "名詞", "phonetic": "/taɪm/", "example": "What time is it?", "example_ja": "今何時ですか？"},
    {"word": "to", "ja": "〜に", "pos": "前置詞", "phonetic": "/tuː/", "example": "I went to the store.", "example_ja": "お店に行きました。"},
    {"word": "today", "ja": "今日", "pos": "名詞", "phonetic": "/təˈdeɪ/", "example": "Today is Monday.", "example_ja": "今日は月曜日です。"},
    {"word": "too", "ja": "〜もまた・〜すぎる", "pos": "副詞", "phonetic": "/tuː/", "example": "I am too tired.", "example_ja": "疲れすぎました。"},
    {"word": "two", "ja": "2", "pos": "数詞", "phonetic": "/tuː/", "example": "I have two brothers.", "example_ja": "兄弟が2人います。"},
    {"word": "under", "ja": "〜の下に", "pos": "前置詞", "phonetic": "/ˈʌndər/", "example": "The cat is under the table.", "example_ja": "猫がテーブルの下にいます。"},
    {"word": "understand", "ja": "理解する", "pos": "動詞", "phonetic": "/ˌʌndərˈstænd/", "example": "I understand.", "example_ja": "わかりました。"},
    {"word": "up", "ja": "上に", "pos": "副詞", "phonetic": "/ʌp/", "example": "Wake up!", "example_ja": "起きて！"},
    {"word": "us", "ja": "私たちを", "pos": "代名詞", "phonetic": "/ʌs/", "example": "Join us.", "example_ja": "参加してください。"},
    {"word": "use", "ja": "使う", "pos": "動詞", "phonetic": "/juːz/", "example": "I use a computer.", "example_ja": "パソコンを使います。"},
    {"word": "very", "ja": "とても", "pos": "副詞", "phonetic": "/ˈveri/", "example": "It is very hot.", "example_ja": "とても暑いです。"},
    {"word": "want", "ja": "欲しい", "pos": "動詞", "phonetic": "/wɑːnt/", "example": "I want a new bag.", "example_ja": "新しいかばんが欲しいです。"},
    {"word": "water", "ja": "水", "pos": "名詞", "phonetic": "/ˈwɔːtər/", "example": "Can I have some water?", "example_ja": "お水をもらえますか？"},
    {"word": "we", "ja": "私たちは", "pos": "代名詞", "phonetic": "/wiː/", "example": "We are a team.", "example_ja": "私たちはチームです。"},
    {"word": "well", "ja": "よく・元気な", "pos": "副詞", "phonetic": "/wel/", "example": "I am well.", "example_ja": "元気です。"},
    {"word": "what", "ja": "何", "pos": "代名詞", "phonetic": "/wɑːt/", "example": "What is this?", "example_ja": "これは何ですか？"},
    {"word": "when", "ja": "いつ", "pos": "副詞", "phonetic": "/wen/", "example": "When are you coming?", "example_ja": "いつ来ますか？"},
    {"word": "where", "ja": "どこ", "pos": "副詞", "phonetic": "/wer/", "example": "Where do you live?", "example_ja": "どこに住んでいますか？"},
    {"word": "white", "ja": "白い", "pos": "形容詞", "phonetic": "/waɪt/", "example": "The snow is white.", "example_ja": "雪は白いです。"},
    {"word": "who", "ja": "誰", "pos": "代名詞", "phonetic": "/huː/", "example": "Who are you?", "example_ja": "あなたは誰ですか？"},
    {"word": "why", "ja": "なぜ", "pos": "副詞", "phonetic": "/waɪ/", "example": "Why are you sad?", "example_ja": "なぜ悲しいのですか？"},
    {"word": "will", "ja": "〜するだろう", "pos": "助動詞", "phonetic": "/wɪl/", "example": "I will try my best.", "example_ja": "最善を尽くします。"},
    {"word": "with", "ja": "〜と一緒に", "pos": "前置詞", "phonetic": "/wɪð/", "example": "Come with me.", "example_ja": "私と一緒に来てください。"},
    {"word": "woman", "ja": "女性", "pos": "名詞", "phonetic": "/ˈwʊmən/", "example": "The woman is kind.", "example_ja": "その女性は親切です。"},
    {"word": "work", "ja": "働く", "pos": "動詞", "phonetic": "/wɜːrk/", "example": "I work from home.", "example_ja": "家で働いています。"},
    {"word": "world", "ja": "世界", "pos": "名詞", "phonetic": "/wɜːrld/", "example": "The world is beautiful.", "example_ja": "世界は美しいです。"},
    {"word": "write", "ja": "書く", "pos": "動詞", "phonetic": "/raɪt/", "example": "Please write your name.", "example_ja": "名前を書いてください。"},
    {"word": "year", "ja": "年", "pos": "名詞", "phonetic": "/jɪr/", "example": "This year is 2026.", "example_ja": "今年は2026年です。"},
    {"word": "yes", "ja": "はい", "pos": "感嘆詞", "phonetic": "/jes/", "example": "Yes, please.", "example_ja": "はい、お願いします。"},
    {"word": "you", "ja": "あなた", "pos": "代名詞", "phonetic": "/juː/", "example": "You are welcome.", "example_ja": "どういたしまして。"},
    {"word": "young", "ja": "若い", "pos": "形容詞", "phonetic": "/jʌŋ/", "example": "She is young.", "example_ja": "彼女は若いです。"},
]

# =============================================================================
# SEED DATA: A2 (基礎応用 〜200語)
# =============================================================================
A2_WORDS = [
    {"word": "able", "ja": "〜できる", "pos": "形容詞", "phonetic": "/ˈeɪbl/", "example": "Are you able to come?", "example_ja": "来ることができますか？"},
    {"word": "above", "ja": "〜の上に", "pos": "前置詞", "phonetic": "/əˈbʌv/", "example": "The bird flew above us.", "example_ja": "鳥が頭上を飛びました。"},
    {"word": "abroad", "ja": "海外に", "pos": "副詞", "phonetic": "/əˈbrɔːd/", "example": "I want to study abroad.", "example_ja": "海外留学したいです。"},
    {"word": "accept", "ja": "受け入れる", "pos": "動詞", "phonetic": "/əkˈsept/", "example": "I accept your offer.", "example_ja": "あなたの申し出を受け入れます。"},
    {"word": "accident", "ja": "事故", "pos": "名詞", "phonetic": "/ˈæksɪdənt/", "example": "There was an accident.", "example_ja": "事故がありました。"},
    {"word": "across", "ja": "〜を横切って", "pos": "前置詞", "phonetic": "/əˈkrɔːs/", "example": "Walk across the bridge.", "example_ja": "橋を渡ってください。"},
    {"word": "actually", "ja": "実は", "pos": "副詞", "phonetic": "/ˈæktʃuəli/", "example": "Actually, I disagree.", "example_ja": "実は、私は反対です。"},
    {"word": "advice", "ja": "アドバイス", "pos": "名詞", "phonetic": "/ədˈvaɪs/", "example": "Can you give me some advice?", "example_ja": "アドバイスをもらえますか？"},
    {"word": "afraid", "ja": "怖い", "pos": "形容詞", "phonetic": "/əˈfreɪd/", "example": "I am afraid of spiders.", "example_ja": "クモが怖いです。"},
    {"word": "afternoon", "ja": "午後", "pos": "名詞", "phonetic": "/ˌæftərˈnuːn/", "example": "Good afternoon!", "example_ja": "こんにちは！（午後）"},
    {"word": "agree", "ja": "賛成する", "pos": "動詞", "phonetic": "/əˈɡriː/", "example": "I agree with you.", "example_ja": "あなたに賛成です。"},
    {"word": "airport", "ja": "空港", "pos": "名詞", "phonetic": "/ˈerpɔːrt/", "example": "We arrived at the airport.", "example_ja": "空港に着きました。"},
    {"word": "already", "ja": "すでに", "pos": "副詞", "phonetic": "/ɔːlˈredi/", "example": "I have already eaten.", "example_ja": "もう食べました。"},
    {"word": "angry", "ja": "怒っている", "pos": "形容詞", "phonetic": "/ˈæŋɡri/", "example": "Don't be angry.", "example_ja": "怒らないでください。"},
    {"word": "answer", "ja": "答える", "pos": "動詞", "phonetic": "/ˈænsər/", "example": "Answer the question.", "example_ja": "質問に答えてください。"},
    {"word": "arrive", "ja": "到着する", "pos": "動詞", "phonetic": "/əˈraɪv/", "example": "We will arrive at noon.", "example_ja": "正午に到着します。"},
    {"word": "ask", "ja": "尋ねる", "pos": "動詞", "phonetic": "/æsk/", "example": "Can I ask you something?", "example_ja": "聞いてもいいですか？"},
    {"word": "attempt", "ja": "試みる", "pos": "動詞", "phonetic": "/əˈtempt/", "example": "I will attempt it.", "example_ja": "やってみます。"},
    {"word": "attention", "ja": "注意", "pos": "名詞", "phonetic": "/əˈtenʃn/", "example": "Pay attention!", "example_ja": "注意してください！"},
    {"word": "available", "ja": "利用可能な", "pos": "形容詞", "phonetic": "/əˈveɪləbl/", "example": "Is this seat available?", "example_ja": "この席は空いていますか？"},
    {"word": "away", "ja": "離れて", "pos": "副詞", "phonetic": "/əˈweɪ/", "example": "Go away!", "example_ja": "あっちへ行って！"},
    {"word": "back", "ja": "後ろ・背中", "pos": "名詞", "phonetic": "/bæk/", "example": "I will be back soon.", "example_ja": "すぐに戻ります。"},
    {"word": "bank", "ja": "銀行", "pos": "名詞", "phonetic": "/bæŋk/", "example": "I need to go to the bank.", "example_ja": "銀行に行く必要があります。"},
    {"word": "bath", "ja": "風呂", "pos": "名詞", "phonetic": "/bæθ/", "example": "I take a bath every night.", "example_ja": "毎晩お風呂に入ります。"},
    {"word": "beach", "ja": "ビーチ", "pos": "名詞", "phonetic": "/biːtʃ/", "example": "Let's go to the beach.", "example_ja": "ビーチに行きましょう。"},
    {"word": "become", "ja": "〜になる", "pos": "動詞", "phonetic": "/bɪˈkʌm/", "example": "I want to become a doctor.", "example_ja": "医者になりたいです。"},
    {"word": "begin", "ja": "始める", "pos": "動詞", "phonetic": "/bɪˈɡɪn/", "example": "Let's begin the lesson.", "example_ja": "レッスンを始めましょう。"},
    {"word": "behind", "ja": "〜の後ろに", "pos": "前置詞", "phonetic": "/bɪˈhaɪnd/", "example": "The cat is behind the sofa.", "example_ja": "猫がソファーの後ろにいます。"},
    {"word": "believe", "ja": "信じる", "pos": "動詞", "phonetic": "/bɪˈliːv/", "example": "I believe in you.", "example_ja": "あなたを信じています。"},
    {"word": "below", "ja": "〜の下に", "pos": "前置詞", "phonetic": "/bɪˈloʊ/", "example": "The temperature is below zero.", "example_ja": "気温が零下です。"},
    {"word": "between", "ja": "〜の間に", "pos": "前置詞", "phonetic": "/bɪˈtwiːn/", "example": "Sit between us.", "example_ja": "私たちの間に座ってください。"},
    {"word": "body", "ja": "体", "pos": "名詞", "phonetic": "/ˈbɑːdi/", "example": "Exercise is good for the body.", "example_ja": "運動は体に良いです。"},
    {"word": "born", "ja": "生まれた", "pos": "形容詞", "phonetic": "/bɔːrn/", "example": "I was born in 1990.", "example_ja": "1990年に生まれました。"},
    {"word": "both", "ja": "両方", "pos": "形容詞", "phonetic": "/boʊθ/", "example": "Both are correct.", "example_ja": "両方とも正しいです。"},
    {"word": "break", "ja": "壊す・休憩", "pos": "動詞/名詞", "phonetic": "/breɪk/", "example": "Let's take a break.", "example_ja": "休憩しましょう。"},
    {"word": "breakfast", "ja": "朝食", "pos": "名詞", "phonetic": "/ˈbrekfəst/", "example": "I had eggs for breakfast.", "example_ja": "朝食に卵を食べました。"},
    {"word": "bring", "ja": "持ってくる", "pos": "動詞", "phonetic": "/brɪŋ/", "example": "Please bring your own water.", "example_ja": "自分の水を持ってきてください。"},
    {"word": "build", "ja": "建てる", "pos": "動詞", "phonetic": "/bɪld/", "example": "They will build a new school.", "example_ja": "新しい学校が建てられます。"},
    {"word": "bus", "ja": "バス", "pos": "名詞", "phonetic": "/bʌs/", "example": "I take the bus to work.", "example_ja": "バスで通勤しています。"},
    {"word": "busy", "ja": "忙しい", "pos": "形容詞", "phonetic": "/ˈbɪzi/", "example": "I am very busy today.", "example_ja": "今日はとても忙しいです。"},
]

# =============================================================================
# SEED DATA: B1 (中級 〜40語)
# =============================================================================
B1_WORDS = [
    {"word": "achieve", "ja": "達成する", "pos": "動詞", "phonetic": "/əˈtʃiːv/", "example": "He achieved his goal.", "example_ja": "彼は目標を達成した。"},
    {"word": "advantage", "ja": "利点", "pos": "名詞", "phonetic": "/ədˈvæntɪdʒ/", "example": "This plan has many advantages.", "example_ja": "この計画には多くの利点がある。"},
    {"word": "behavior", "ja": "振る舞い", "pos": "名詞", "phonetic": "/bɪˈheɪvjər/", "example": "His behavior was strange.", "example_ja": "彼の振る舞いは奇妙だった。"},
    {"word": "campaign", "ja": "キャンペーン・運動", "pos": "名詞", "phonetic": "/kæmˈpeɪn/", "example": "They started a new ad campaign.", "example_ja": "新しい広告キャンペーンを始めた。"},
    {"word": "damage", "ja": "損害", "pos": "名詞", "phonetic": "/ˈdæmɪdʒ/", "example": "The storm caused a lot of damage.", "example_ja": "嵐は多大な被害をもたらした。"},
    {"word": "effect", "ja": "影響・効果", "pos": "名詞", "phonetic": "/ɪˈfekt/", "example": "The medicine had a good effect.", "example_ja": "その薬は良い効果があった。"},
    {"word": "familiar", "ja": "よく知られている", "pos": "形容詞", "phonetic": "/fəˈmɪliər/", "example": "Your face looks familiar.", "example_ja": "見覚えのある顔ですね。"},
    {"word": "general", "ja": "一般的な", "pos": "形容詞", "phonetic": "/ˈdʒenərəl/", "example": "He gave a general overview.", "example_ja": "彼は一般的な概要を説明した。"},
    {"word": "habit", "ja": "習慣", "pos": "名詞", "phonetic": "/ˈhæbɪt/", "example": "Exercise is a good habit.", "example_ja": "運動は良い習慣だ。"},
    {"word": "identify", "ja": "特定する", "pos": "動詞", "phonetic": "/aɪˈdentɪfaɪ/", "example": "Can you identify the suspect?", "example_ja": "容疑者を特定できますか？"},
]

# =============================================================================
# SEED DATA: B2 (中上級 〜40語)
# =============================================================================
B2_WORDS = [
    {"word": "abandon", "ja": "見捨てる・放棄する", "pos": "動詞", "phonetic": "/əˈbændən/", "example": "They abandoned the sinking ship.", "example_ja": "彼らは沈みゆく船を放棄した。"},
    {"word": "capacity", "ja": "容量・能力", "pos": "名詞", "phonetic": "/kəˈpæsəti/", "example": "The stadium has a seating capacity of 50,000.", "example_ja": "スタジアムの収容人数は5万人です。"},
    {"word": "decade", "ja": "10年間", "pos": "名詞", "phonetic": "/ˈdekeɪd/", "example": "Technology has changed a lot in the last decade.", "example_ja": "過去10年で技術は大きく変わった。"},
    {"word": "eliminate", "ja": "排除する", "pos": "動詞", "phonetic": "/ɪˈlɪmɪneɪt/", "example": "We must eliminate all errors.", "example_ja": "全てのエラーを排除しなければならない。"},
    {"word": "fundamental", "ja": "基本的な", "pos": "形容詞", "phonetic": "/ˌfʌndəˈmentl/", "example": "There is a fundamental difference.", "example_ja": "根本的な違いがある。"},
    {"word": "generate", "ja": "生み出す", "pos": "動詞", "phonetic": "/ˈdʒenəreɪt/", "example": "The wind turbines generate electricity.", "example_ja": "風力タービンが電力を生み出す。"},
    {"word": "hypothesis", "ja": "仮説", "pos": "名詞", "phonetic": "/haɪˈpɑːθəsɪs/", "example": "The scientists tested their hypothesis.", "example_ja": "科学者たちは仮説を検証した。"},
    {"word": "illustrate", "ja": "図解する・説明する", "pos": "動詞", "phonetic": "/ˈɪləstreɪt/", "example": "This chart illustrates the problem.", "example_ja": "この図表が問題を説明している。"},
    {"word": "justify", "ja": "正当化する", "pos": "動詞", "phonetic": "/ˈdʒʌstɪfaɪ/", "example": "How do you justify your actions?", "example_ja": "自分の行動をどう正当化しますか？"},
    {"word": "likewise", "ja": "同様に", "pos": "副詞", "phonetic": "/ˈlaɪkwaɪz/", "example": "Watch what I do, and do likewise.", "example_ja": "私のやり方を見て、同様にやりなさい。"},
]

# =============================================================================
# SEED DATA: C1 (上級 〜40語)
# =============================================================================
C1_WORDS = [
    {"word": "ambiguous", "ja": "曖昧な", "pos": "形容詞", "phonetic": "/æmˈbɪɡjuəs/", "example": "His instructions were ambiguous.", "example_ja": "彼の指示は曖昧だった。"},
    {"word": "benevolent", "ja": "慈悲深い", "pos": "形容詞", "phonetic": "/bəˈnevələnt/", "example": "She was a benevolent leader.", "example_ja": "彼女は慈悲深いリーダーだった。"},
    {"word": "catalyst", "ja": "触媒・きっかけ", "pos": "名詞", "phonetic": "/ˈkætəlɪst/", "example": "The protest acted as a catalyst for change.", "example_ja": "その抗議活動は変化のきっかけとなった。"},
    {"word": "dichotomy", "ja": "二分法", "pos": "名詞", "phonetic": "/daɪˈkɑːtəmi/", "example": "There is often a dichotomy between theory and practice.", "example_ja": "理論と実践の間にはしばしば二分法が存在する。"},
    {"word": "empirical", "ja": "経験的な・実証的な", "pos": "形容詞", "phonetic": "/ɪmˈpɪrɪkl/", "example": "We need empirical evidence.", "example_ja": "実証的な証拠が必要だ。"},
    {"word": "fluctuate", "ja": "変動する", "pos": "動詞", "phonetic": "/ˈflʌktʃueɪt/", "example": "Stock prices fluctuate daily.", "example_ja": "株価は毎日変動する。"},
    {"word": "gregarious", "ja": "社交的な", "pos": "形容詞", "phonetic": "/ɡrɪˈɡeriəs/", "example": "He is a very gregarious person.", "example_ja": "彼はとても社交的な人だ。"},
    {"word": "hierarchy", "ja": "階層・ヒエラルキー", "pos": "名詞", "phonetic": "/ˈhaɪərɑːrki/", "example": "The corporate hierarchy is rigid.", "example_ja": "企業のヒエラルキーは厳格だ。"},
    {"word": "inevitable", "ja": "避けられない", "pos": "形容詞", "phonetic": "/ɪnˈevɪtəbl/", "example": "Change is inevitable.", "example_ja": "変化は避けられない。"},
    {"word": "jeopardize", "ja": "危険にさらす", "pos": "動詞", "phonetic": "/ˈdʒepərdaɪz/", "example": "Don't jeopardize your career.", "example_ja": "あなたのキャリアを危険にさらしてはいけない。"},
]

# =============================================================================
# Build seed with level tags
# =============================================================================
def build_seed():
    seed = []
    for w in A1_WORDS:
        w["level"] = "A1"
        w["source"] = "seed"
        seed.append(w)
    for w in A2_WORDS:
        w["level"] = "A2"
        w["source"] = "seed"
        seed.append(w)
    for w in B1_WORDS:
        w["level"] = "B1"
        w["source"] = "seed"
        seed.append(w)
    for w in B2_WORDS:
        w["level"] = "B2"
        w["source"] = "seed"
        seed.append(w)
    for w in C1_WORDS:
        w["level"] = "C1"
        w["source"] = "seed"
        seed.append(w)
    return seed


def main():
    existing = dictionary_service.get_word_count()
    if existing > 0:
        print(f"[INFO] 辞書に既に {existing} 語が存在します。追加投入をスキップします。")
        print("[INFO] 強制再投入する場合は dictionary.db を削除してから再度実行してください。")
        return

    seed = build_seed()
    print(f"[....] {len(seed)} 語を投入中...")
    dictionary_service.bulk_insert(seed)
    final_count = dictionary_service.get_word_count()
    print(f"[OK] 辞書初期化完了。合計 {final_count} 語を登録しました。")


if __name__ == "__main__":
    main()
