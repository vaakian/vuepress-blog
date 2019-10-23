(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(t,s,a){"use strict";a.r(s);var e=a(0),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("p",[a("em",[t._v("目录索引")])]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#一、顺序表"}},[t._v("一、顺序表")]),a("ul",[a("li",[a("a",{attrs:{href:"#数据定义"}},[t._v("数据定义")])]),a("li",[a("a",{attrs:{href:"#操作"}},[t._v("操作")])])])]),a("li",[a("a",{attrs:{href:"#二、链表"}},[t._v("二、链表")])]),a("li",[a("a",{attrs:{href:"#三、队列-栈"}},[t._v("三、队列 & 栈")])]),a("li",[a("a",{attrs:{href:"#四、串、数组"}},[t._v("四、串、数组")])]),a("li",[a("a",{attrs:{href:"#五、-树"}},[t._v("五、 树")]),a("ul",[a("li",[a("a",{attrs:{href:"#名词解析"}},[t._v("名词解析")])]),a("li",[a("a",{attrs:{href:"#二叉树"}},[t._v("二叉树")])]),a("li",[a("a",{attrs:{href:"#哈夫曼树-huffman-tree"}},[t._v("哈夫曼树(Huffman Tree)")])])])]),a("li",[a("a",{attrs:{href:"#图"}},[t._v("图")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"一、顺序表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、顺序表"}},[t._v("#")]),t._v(" 一、顺序表")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("简介")]),t._v(" "),a("p",[t._v("顺序表，一个指针存数组首地址，每次分配固定长度，长度不足时，使用"),a("code",[t._v("realloc")]),t._v("函数再进行分配空间。")])]),t._v(" "),a("h3",{attrs:{id:"数据定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据定义"}},[t._v("#")]),t._v(" 数据定义")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ElemType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SeqList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ElemType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 已存入个数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大容量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("h4",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("分配空间")])]),t._v(" "),a("li",[a("p",[t._v("初始化"),a("code",[t._v("length")]),t._v("、"),a("code",[t._v("size")])])])])]),t._v(" "),a("h4",{attrs:{id:"插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[t._v("#")]),t._v(" 插入")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("插入到某下标n之前，则从"),a("code",[t._v("n")]),t._v("位置到"),a("code",[t._v("length-1")]),t._v("，整体后移动。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("n不合法 "),a("code",[t._v("(0≤n≤length-1)")])])]),t._v(" "),a("li",[a("p",[t._v("顺序表满，重新分配空")])])]),t._v(" "),a("p",[t._v("插入成功后，该顺序表"),a("code",[t._v("length + 1")])])]),t._v(" "),a("h4",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),a("h2",{attrs:{id:"二、链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、链表"}},[t._v("#")]),t._v(" 二、链表")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("还未熟练掌握")]),t._v(" "),a("ol",[a("li",[t._v("反转链表（创建新链表，遍历头插到该链表）")])])]),t._v(" "),a("h2",{attrs:{id:"三、队列-栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、队列-栈"}},[t._v("#")]),t._v(" 三、队列 & 栈")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("还未熟练掌握")]),t._v(" "),a("ol",[a("li",[t._v("数组实现的队列")])])]),t._v(" "),a("h2",{attrs:{id:"四、串、数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、串、数组"}},[t._v("#")]),t._v(" 四、串、数组")]),t._v(" "),a("h2",{attrs:{id:"五、-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-树"}},[t._v("#")]),t._v(" 五、 树")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Q：二叉树是一种特殊的树？")]),t._v(" "),a("p",[t._v("A：数不可为空，二叉树可以。所以二叉树不属于特殊的树。")])]),t._v(" "),a("h3",{attrs:{id:"名词解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解析"}},[t._v("#")]),t._v(" 名词解析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("节点的度：直属儿子节点个数")])]),t._v(" "),a("li",[a("p",[t._v("叶子节点：度为"),a("code",[t._v("0")])])]),t._v(" "),a("li",[a("p",[t._v("深度：数在逻辑上的深度")])])]),t._v(" "),a("h3",{attrs:{id:"二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("还未掌握")]),t._v(" "),a("p",[t._v("已知完全二叉树的一维数组表示，还原二叉树。\n已知前中后序，还原该二叉树。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("定义")]),t._v(" "),a("p",[t._v("只有左右两个子节点，可以为空。")])]),t._v(" "),a("ul",[a("li",[t._v("主要算法：\n"),a("ul",[a("li",[t._v("求值\n"),a("ol",[a("li",[t._v("求高度")]),t._v(" "),a("li",[t._v("求叶子节点个数")]),t._v(" "),a("li",[t._v("求单分支节点个数")]),t._v(" "),a("li",[t._v("求双分支节点个数")]),t._v(" "),a("li",[t._v("统计所有节点个数")]),t._v(" "),a("li",[t._v("求某节点在哪层")])])]),t._v(" "),a("li",[t._v("操作\n"),a("ol",[a("li",[t._v("先、中、后、层序遍历")]),t._v(" "),a("li",[t._v("先序、搜索树、平衡搜索树的创建")])])])])])]),t._v(" "),a("h4",{attrs:{id:"数据结构定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构定义"}},[t._v("#")]),t._v(" 数据结构定义")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BinaryNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  BinaryNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  BinaryNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("BinaryTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"哈夫曼树-huffman-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈夫曼树-huffman-tree"}},[t._v("#")]),t._v(" 哈夫曼树"),a("code",[t._v("(Huffman Tree)")])]),t._v(" "),a("p",[t._v("构造一颗二叉树，若该树的戴荃路径长度达到最小，则称为二叉树的最优二叉树，也称为"),a("code",[t._v("哈夫曼树")]),t._v("。")]),t._v(" "),a("p",[t._v("主要做数据压缩存储、传输。")]),t._v(" "),a("ul",[a("li",[t._v("特点：\n"),a("ol",[a("li",[t._v("没有单分支节点")]),t._v(" "),a("li",[t._v("权越大，路径边越短")]),t._v(" "),a("li",[t._v("使用哈夫曼树编码，不会出现相同前缀。 如：0、10、110、111")])])])]),t._v(" "),a("h4",{attrs:{id:"构造哈弗曼树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造哈弗曼树"}},[t._v("#")]),t._v(" 构造哈弗曼树")]),t._v(" "),a("p",[t._v("找出每次剩下的两个最小节点x、y，生成父节点z权值为x+y。")]),t._v(" "),a("p",[t._v("第二次再找出剩下最小节点t，生成父节点a的权值为z+t （z+x+y）；")]),t._v(" "),a("p",[t._v("以此类推……")]),t._v(" "),a("p",[t._v("若"),a("code",[t._v("A、B、C、D")]),t._v("节点的权分别为"),a("code",[t._v("4、2、6、1")])]),t._v(" "),a("p",[t._v("则：……")]),t._v(" "),a("h2",{attrs:{id:"图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[t._v("#")]),t._v(" 图")])])}),[],!1,null,null,null);s.default=v.exports}}]);