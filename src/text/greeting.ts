import { Telegraf, Context } from 'telegraf';
import createDebug from 'debug';
import moment from 'moment-timezone';
import schedule from 'node-schedule';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const bot = new Telegraf(BOT_TOKEN);

const debug = createDebug('bot:greeting_text');

const names = ['Sally', 'Leo', 'Sean'];
// 隨機選擇名字的函數
const getRandomName = () => names[Math.floor(Math.random() * names.length)];

// 被動觸發訊息
const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  });

// 被動觸發圖片
const replyWithImage = async (ctx: Context, messageId: number, imageUrl: string) => {
  try {
    // 使用 imageUrl 參數來發送圖片
    const chatId = '-464385038'; // chat ID
    // 如果是 GIF 檔案，使用 sendAnimation 方法
    if (imageUrl.endsWith('.gif')) {
    await bot.telegram.sendAnimation(chatId, imageUrl);
    } else {
    // 否則使用 sendPhoto 方法發送靜態圖片
    await bot.telegram.sendPhoto(chatId, imageUrl);
    };
    console.log("Image sent successfully");
  } catch (error) {
    console.error("Failed to send image", error);
  }
};
  
const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');
  // const now = moment().tz('Asia/Taipei');
  // const currentTime = now.format('HH:mm');
  // if (currentTime === '11:32') {
  //     for (let i = 0; i < 1; i++) {
  //       const message = '我們團隊就像f1賽車 後輪要裝在前輪上 輪胎要先洩氣,thx';
  //       await ctx.sendMessage(message);
  //   }
  // }60000;

  const chatId = ctx.msg.chat.id;  // 這是用戶的 chatId
  console.log(`Chat ID: ${chatId}`);

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;
  const text = (ctx.message as { text: string }).text;

  type ResponseType = {
    type: 'string' | 'image';
    text?: string;
    source?: string;
  };

  type ResponseOptions = ResponseType[];
  const responses: { [key: string]: ResponseType[] } = {
    "謝謝|感恩|感謝": [
      { type: 'string', text: "甭客氣 能為您服務是我的榮幸" },
      { type: 'string', text: "瑞瑞一直都在❤" }
    ],
    "想下班|想回家": [
      { type: 'string', text: `${userName},去掃廁所!` }
    ],
    "好餓|中午吃|午餐": [
      { type: 'string', text: "上官木桶鍋已訂位\n請不要點金額高於我的餐點,thx" },
      { type: 'string', text: "今天請大家吃88元火鍋~~耶~~" }
    ],
    "零食": [
      { type: 'string', text: "100塊拿去買,記得打統編找錢,thx" }
    ],
    "下午茶|點心": [
      { type: 'string', text: "我有買蛋糕,大家快來享用" }
    ],
    "大便|馬桶|廁所|髒|拉屎|屎|臭": [
      { type: 'string', text: "馬桶上的尿垢再請Grace留意 齁齁" }
    ],
    "需求|緊急|做不完|快爆炸|炸|技術": [
      { type: 'string', text: `${userName}將此項目列為最高priority,thx` }
    ],
    "項目": [
      { type: 'string', text: "需求方說後輪要洩氣這個要優先完成,月底活動上線才能爆炸,thx" }
    ],
    "馬哥": [
      { type: 'string', text: "馬哥的攝像頭呢?" }
    ],
    "音樂|安靜": [
      { type: 'string', text: "誰把我的死人音樂關了?" },
      { type: 'string', text: "各位,電視我已經砸了,以後請戴耳機聽H5版KKBOX,thx" }
    ],
    "社團|校外教學": [
      { type: 'string', text: "這周社團活動是爬陽明山" },
      { type: 'image', source: "https://i.imgur.com/00DD2XA.jpeg" },
      { type: 'image', source: "https://i.imgur.com/uVuxvfm.jpeg" },
      { type: 'string', text: "這周社團活動是電影日,我幫大家訂了3個香菜豬血糕五更腸旺比薩" }
    ],
    "Grace|老妖": [
      { type: 'string', text: "Grace 妳今天的粉比我的腳皮還厚" },
      { type: 'string', text: "Grace 妳不要再拍亡美照" }
    ],
    "陽明山": [
      { type: 'string', text: "Grace 妳不要再拍亡美照" }
    ],
    "垃圾": [
      { type: 'string', text: "廁所垃圾桶又滿了,誰是值日生?" }
    ],
    "開會|會議": [
      { type: 'string', text: "我Main開投影機" }
    ],
    "Gank": [
      { type: 'string', text: `${userName}進度如何?` }
    ],
    "想睡|賽車": [
      { type: 'string', text: `${userName}請專心裝輪胎,thx` }
    ],
    "目標|團隊": [
      { type: 'string', text: "我們團隊就像f1賽車 後輪要裝在前輪上 輪胎要先洩氣,thx" }
    ],  
    "贏": [
      { type: 'image', source: "https://i.imgur.com/VQsfguq.jpeg" }
    ],
    "薯條": [
      { type: 'string', text: "Shark不要偷吃Sean的薯條" }
    ],
    "累": [
      { type: 'string', text: "請在跑輪裡盡情地選轉吧倉鼠" }
    ],
    "下課|四點": [
      { type: 'string', text: `${userName}打羽球嗎?` }
    ],
    "領導|主管|資方": [
      { type: 'string', text: "魯哥 Kim 該來會議室檢討勞方了" }
    ],
    "本群": [
      { type: 'string', text: "動物生態評估" }
    ],
    "放假|掰|周末|週末|過節|閃啦|下班": [
      { type: 'string', text: `${userName}週末愉快~!` }
    ],
    "牛奶": [
      { type: 'string', text: "牛奶只是調味,馬哥你倒太多" }
    ],
    "股票": [
      { type: 'string', text: `${userName}工作太少?` }
    ],
    "咖啡": [
      { type: 'string', text: "Grace去洗咖啡機!" }
    ],
    "考評|考績": [
      { type: 'string', text: "公司嚴禁探問" }
    ],
    "獎金|年終": [
      { type: 'image', source: "https://i.imgur.com/efLGupH.jpeg" },
      { type: 'string', text: "輪胎都裝不好還想領錢" }
    ],
    "聚餐|餐聚": [
      { type: 'string', text: "旭集已訂位,thx" }
    ],
    "尾牙": [
      { type: 'string', text: "尾牙一個人有700唷~~地點在辦公室,多退少補,記得打統編,thx" }
    ],
    "H5|多語系|泰文|黑金|年輕": [
      { type: 'string', text: "每日任務-Git炸裂✅" }
    ],
    "勞方|勞工": [
      { type: 'string', text: "這次餐聚從去年陽明山景觀餐廳改到麥當勞,再請Devin幫我統計意見回饋,thx" },
      { type: 'string', text: "社團日你們勞工群自己討論，討論完再讓我知道,thx" }
    ],
    "冷氣": [
      { type: 'string', text: "昨天誰最後走的,冷氣忘了關,請大家愛護北極熊,thx" }
    ],
    "遠端": [
      { type: 'string', text: `就算${userName}你遠端在家,我也會密切關注你的進度` }
    ],
    "打卡": [
      { type: 'string', text: `${userName} 快十點了,你刷臉了嗎?` }
    ],
    "消毒|疫情|回報": [
      { type: 'string', text: "已消毒" }
    ],
    "收到": [
      { type: 'string', text: `${userName},thx` }
    ],
    "Trello|Jira": [
      { type: 'string', text: "不管Trello還是Jira前端需求總是滿滿滿" }
    ],
    "請假": [
      { type: 'string', text: `感覺${userName}真生病 但是他還想給公司價值` }
    ],
    "動物評估": [
      { type: 'string', text: "泰文版的翻译进度需要评估" }
    ],
    "南港|爬山": [
      { type: 'image', source: "https://i.imgur.com/00DD2XA.jpeg" },
      { type: 'string', text: "南港山我用膝蓋在爬的" }
    ],
    "福隆|腳踏車": [
      { type: 'string', text: "要來根烤香腸嗎~~" }
    ],
    "捕魚": [
      { type: 'image', source: "https://i.imgur.com/KI7nE1b.gif" }
    ],
    "加班": [
      { type: 'image', source: "https://i.imgur.com/KI7nE1b.gif" },
      { type: 'string', text: "o0乂叛逆の小翔不加班乂0o" },
      { type: 'string', text: "公司還是希望大家生活品質要兼顧,絕對不是說加班費公司付不起" }
    ],
    "摳": [
      { type: 'string', text: `${userName}別這樣說,今天下午茶是星巴克` }
    ],
    "怕": [
      { type: 'image', source: "https://i.imgur.com/BrA3Ug5.jpeg" },

    ],
    "ok嗎?|可以嗎?": [
      { type: 'string', text: "1" }
    ],
    "瑞瑞": [
      { type: 'string', text: `${userName}找我嗎?` },
      { type: 'string', text: "齁齁" }
    ]
  };  


  if (messageId) {
    for (const [keywords, responseOptions] of Object.entries(responses)) {
      if (text && new RegExp(`${keywords}`, 'i').test(text)) {  // 使用正則表達式來匹配關鍵字
        
      const response = responseOptions[Math.floor(Math.random() * responseOptions.length)];// 隨機選擇一個回覆選項

        if (typeof response === 'object' && response.type === 'image' && response.source) {
          // 回覆圖片
          await replyWithImage(ctx, messageId, response.source); // 確保 response.source 是 string
        } else if (typeof response === 'object' && response.type === 'string' && response.text) {
          // 回覆文字
          await replyToMessage(ctx, messageId, response.text); // 確保 response.text 是 string
        }
        break;  // 找到匹配後就停止迴圈，避免重複回應
      }
    }
  }
  
  // greeting()--end
}

// 主動發送訊息
const sendMessageToChat = async (chatId: number, message: string) => {
  try {
    await bot.telegram.sendMessage(chatId, message);
    console.log(`Message sent to chat ID: ${chatId}`);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const schedules = [
  { hour: 9, minute: 49, second: 0, message: '已消毒' },
  { hour: 9, minute: 58, second: 0, message: '(開投影機)' },
  { hour: 9, minute: 0, second: 0, message: '(大家起立)' },
  { hour: 12, minute: 2, second: 30, message: `${getRandomName()}打卡了嗎?` },
  { hour: 10, minute: 0, second: 30, message: '由RD先開始吧' },
  { hour: 10, minute: 30, second: 0, message: `${getRandomName()}幫我開一下死人音樂,thx` },
  { hour: 10, minute: 34, second: 0, message: '請兩位主管確實回報消毒,thx' },
  { hour: 10, minute: 40, second: 0, message: '公司還是希望大家生活品質要兼顧,絕對不是說加班費公司付不起' },
  { hour: 11, minute: 30, second: 0, message: '各位,電視我已經砸了,以後請戴耳機聽H5版KKBOX,thx' },
  { hour: 12, minute: 1, second: 0, message: `${getRandomName()}中午吃什麼?` },
  { hour: 13, minute: 35, second: 0, message: 'Apple燈幫我開一下,thx' },
  { hour: 14, minute: 34, second: 0, message: '廁所衛生紙沒了,值日生是誰?' },
  { hour: 14, minute: 53, second: 0, message: '禮拜三早上週會討論,thx' },
  { hour: 15, minute: 27, second: 0, message: '富翔,你過來一下' },
  { hour: 16, minute: 1, second: 0, message: `${getRandomName()}打羽球嗎?` },
  { hour: 16, minute: 12, second: 0, message: 'Ken哥你再抽要QAQQ了' },
  { hour: 16, minute: 33, second: 0, message: 'Devin這週分享會要分享什麼呢?' },
  { hour: 16, minute: 49, second: 0, message: 'Una別再睡了~~' },
  { hour: 16, minute: 52, second: 0, message: 'Grace花快被妳澆死了' },
  { hour: 17, minute: 24, second: 0, message: '各位可以開始清滾輪囉~~清完沒有獎勵' },
  { hour: 17, minute: 30, second: 30, message: '倉鼠們收拾書包，踮起腳尖往停車場移動！' },
  { hour: 17, minute: 31, second: 0, message: '公園美景第一排，我先去佔位了' },
  { hour: 18, minute: 0, second: 0, message: 'QAQQ' },
  { hour: 18, minute: 30, second: 0, message: '魯哥,要下班了嗎?' },
];

// 排程發送訊息
schedules.forEach((scheduleItem) => {
  schedule.scheduleJob(`${scheduleItem.second} ${scheduleItem.minute} ${scheduleItem.hour} * * *`, function () {
    const chatId = -464385038;  // chat ID
    const message = '';
    sendMessageToChat(chatId, scheduleItem.message);
  });
});

// bot.command('greeting', greeting()); 
// bot.launch(); 
export { greeting,sendMessageToChat,replyWithImage };