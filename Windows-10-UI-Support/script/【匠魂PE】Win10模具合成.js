var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

Win10物品=[0,641,642,643,644,645,646,647,648,649,650]
特殊值=[null,null]

function 添加物品(ID,材质名字,排列值,名字,堆叠,是否立体,耐久值,添加到创造,添加创造物品特殊值,分类)
{
ModPE.setItem(ID,材质名字,排列值,名字,堆叠);
Item.setHandEquipped(ID,是否立体);
Item.setMaxDamage(ID,耐久值);
Item.setCategory(ID,分类,添加创造物品特殊值);
if(添加到创造==true)
{
Player.addItemCreativeInv(ID,1,添加创造物品特殊值);
}
}

添加物品(Win10物品[1],"Win10",1,"【 Win10】\n合成模具零件_绑定结",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[2],"Win10",2,"【 Win10】\n合成模具零件_棍子",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[3],"Win10",3,"【 Win10】\n合成模具零件_剑刃",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[4],"Win10",4,"【 Win10】\n合成模具零件_镐头",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[5],"Win10",5,"【 Win10】\n合成模具零件_铲头",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[6],"Win10",6,"【 Win10】\n合成模具零件_韧棒",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[7],"Win10",7,"【 Win10】\n合成模具零件_斧头",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[8],"Win10",8,"【 Win10】\n合成模具零件_大剑刃",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[9],"Win10",9,"【 Win10】\n合成模具零件_护手",64,true,特殊值[null],true,0,2);
添加物品(Win10物品[10],"Win10",10,"【 Win10】\n合成模具零件_大板",64,true,特殊值[null],true,0,2);

function newLevel()
{
clientMessage(ChatColor.DARK_PURPLE+"欢迎【 匠魂PE】Win10MOD模具合成ModPE");
clientMessage(ChatColor.BLUE+"本ModPE需要【 匠魂PE】ModPE的支持"); 
clientMessage(ChatColor.GREEN+"使用本ModPE后,可以在Win10MOD的工作台合成模具了!");
clientMessage(ChatColor.YELLOW+"本ModPE适合喜欢Win10GUI的【 匠魂PE】玩家使用哦");
clientMessage(ChatColor.GOLD+"喜欢的话可以到【 百度贴吧】支持原贴哦!")
clientMessage(ChatColor.RED+"作者:【 百度贴吧】@我的世界之血狼");
clientMessage(ChatColor.AQUA+"使用空白模具点击上方是空气的任何方块,就会获得无法合成工具的零件,然后就可以在工作台使用相应的零件与空白模具合成吧!");

Item.addCraftRecipe(601,1,0,[600,1,0,Win10物品[1],1,0]);
Item.addCraftRecipe(602,1,0,[600,1,0,Win10物品[2],1,0]);
Item.addCraftRecipe(603,1,0,[600,1,0,Win10物品[3],1,0]);
Item.addCraftRecipe(604,1,0,[600,1,0,Win10物品[4],1,0]);
Item.addCraftRecipe(605,1,0,[600,1,0,Win10物品[5],1,0]);
Item.addCraftRecipe(606,1,0,[600,1,0,Win10物品[6],1,0]);
Item.addCraftRecipe(607,1,0,[600,1,0,Win10物品[7],1,0]);
Item.addCraftRecipe(608,1,0,[600,1,0,Win10物品[8],1,0]);
Item.addCraftRecipe(609,1,0,[600,1,0,Win10物品[9],1,0]);
Item.addCraftRecipe(610,1,0,[600,1,0,Win10物品[10],1,0]);
}

function useItem(x,y,z,i,b,s,id,ib)
{
if(i==600&&getTile(x,y+1,z)==0)
{
preventDefault();

Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[1],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[2],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[3],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[4],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[5],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[6],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[7],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[8],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[9],1,0)
Level.dropItem(x+0.5,y+1,z+0.5,0.2,Win10物品[10],1,0)

Player.addItemInventory(600,-1,0);
}
}
