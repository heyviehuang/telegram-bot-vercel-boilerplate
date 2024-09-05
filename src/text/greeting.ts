import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  });

const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;
  const text = (ctx.message as { text: string }).text;

if(messageId){
  if (text && /謝謝|感恩|感謝/.test(text)) {
    await replyToMessage(ctx, messageId, `甭客气 能为您服务是我的荣幸`);
  }
  else if (text && /瑞瑞/.test(text)) {
    await replyToMessage(ctx, messageId, `齁齁`);
  }
  else if (text && /想下班|想回家/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName},去扫厕所!`);
  }
  else if (text && /中午吃|午餐/.test(text)) {
    await replyToMessage(ctx, messageId, `上官木桶锅已订位
请不要点金额高于我的餐点,thx`);
  }
  else if (text && /零食/.test(text)) {
    await replyToMessage(ctx, messageId, `100块拿去买，记得打統編找钱,thx`);
  }
  else if (text && /下午茶|點心/.test(text)) {
    await replyToMessage(ctx, messageId, `我有买蛋糕，大家快来享用`);
  }
  else if (text && /大便|馬桶|廁所|髒|拉屎|屎|臭/.test(text)) {
    await replyToMessage(ctx, messageId, `马桶上的尿垢再请Grace留意 齁齁`);
  }
  else if (text && /需求|緊急|做不完|快爆炸|炸|技術/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}將此項目列為最高priority,thx`);
  }
  else if (text && /項目/.test(text)) {
    await replyToMessage(ctx, messageId, `需求方说后轮要洩气这个要优先完成，月底活动上线才能爆炸,thx`);
  }
  else if (text && /馬哥/.test(text)) {
    await replyToMessage(ctx, messageId, `马哥的摄像头呢?`);
  }
  else if (text && /音樂|安靜/.test(text)) {
    await replyToMessage(ctx, messageId, `谁把我的死人音乐关了?`);
  }
  else if (text && /社團|校外教學/.test(text)) {
    await replyToMessage(ctx, messageId, `这周社团活动是爬阳明山`);
  }
  else if (text && /Grace|grace|老妖/.test(text)) {
    await replyToMessage(ctx, messageId, `Grace 妳今天的粉比我的脚皮还厚`);
  }
  else if (text && /陽明山/.test(text)) {
    await replyToMessage(ctx, messageId, `Grace 妳不要再拍亡美照`);
  }
  else if (text && /垃圾/.test(text)) {
    await replyToMessage(ctx, messageId, `厕所垃圾桶又满了，谁是值日生?`);
  }
  else if (text && /開會|會議/.test(text)) {
    await replyToMessage(ctx, messageId, `我Main开投影机`);
  }
  else if (text && /Gank|GANK|gank/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}捕鱼进度如何?`);
  }
  else if (text && /想睡|賽車/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}请专心装轮胎,thx`);
  }
  else if (text && /目標|團隊/.test(text)) {
    await replyToMessage(ctx, messageId, `我们团队就像f1赛车 后轮要装在前轮上 轮胎要先泄气,thx`);
  }
  else if (text && /薯條/.test(text)) {
    await replyToMessage(ctx, messageId, `Shark不要偷吃Sean的薯条`);
  }
  else if (text && /累/.test(text)) {
    await replyToMessage(ctx, messageId, `请在跑轮里尽情地选转吧仓鼠`);
  }
  else if (text && /下課|四點/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}打羽球吗?`);
  }
  else if (text && /領導|主管|資方/.test(text)) {
    await replyToMessage(ctx, messageId, `鲁哥 Kim 该来会议室检讨劳方了`);
  }
  else if (text && /本群/.test(text)) {
    await replyToMessage(ctx, messageId, `动物生态评估`);
  }
  else if (text && /放假|掰|周末|週末|過節|閃啦|下班|回家/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}周末愉快~!`);
  }
  else if (text && /牛奶/.test(text)) {
    await replyToMessage(ctx, messageId, `牛奶只是调味,马哥你倒太多`);
  }
  else if (text && /股票/.test(text)) {
    await replyToMessage(ctx, messageId, `${userName}工作太少?`);
  }
  else if (text && /咖啡/.test(text)) {
    await replyToMessage(ctx, messageId, `Grace 去洗咖啡机!`);
  }
  else if (text && /考評|考績/.test(text)) {
    await replyToMessage(ctx, messageId, `公司严禁探问`);
  }
  else if (text && /獎金/.test(text)) {
    await replyToMessage(ctx, messageId, `轮胎都装不好还想拿领钱`);
  }
  else if (text && /尾牙|聚餐|餐聚/.test(text)) {
    await replyToMessage(ctx, messageId, `今天老板营收不是很理想，但我希望我们台北公司可以有营收0.0000001成的尾牙预算`);
  }
  else if (text && /H5|h5|多語系|泰文|黑金|年輕/.test(text)) {
    await replyToMessage(ctx, messageId, `每日任务-Git炸裂✅`);
  }
  else if (text && /H5|h5/.test(text)) {
    await replyToMessage(ctx, messageId, `谁的Git乱commit`);
  }
  else if (text && /捕鱼/.test(text)) {
    await replyToMessage(ctx, messageId, `加班飞弹.gif`);
  }
  else if (text && /勞方|勞工/.test(text)) {
    await replyToMessage(ctx, messageId, `这次餐聚从去年阳明山景观餐厅改到麦当劳，再请Devin帮我统计意见回馈,thx`);
  }
  else if (text && /冷氣/.test(text)) {
    await replyToMessage(ctx, messageId, `昨天谁最后走的，冷气忘了关，请大家爱护北极熊,thx`);
  }
  else if (text && /遠端/.test(text)) {
    await replyToMessage(ctx, messageId, `就算${userName}你远端在家，我也会密切关注你的进度`);
  }
  else if (text && /打卡/.test(text)) {
    await replyToMessage(ctx, messageId, `Sean 快十点了，你刷脸了吗`);
  }
  else if (text && /消毒|疫情|回報/.test(text)) {
    await replyToMessage(ctx, messageId, `已消毒`);
  }
  else if (text && /trello|jira|Trello|Jira/.test(text)) {
    await replyToMessage(ctx, messageId, `不管Trello还是Jira前端需求总是满满满`);
  }
 }
};

export { greeting };