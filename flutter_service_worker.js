'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8c0142ee44e4067f0a69703d8e9e274e",
".git/config": "bd0b45704026f33c0118ad69501c1cc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4492e8b12c567f8b5f7783b59c9a4e19",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c01c083c48439560080cb7b0be20dc38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d0d8708a4a73e2d0355924e3111702d",
".git/logs/refs/heads/main": "6030118ba839ed21c14d078bb49a7387",
".git/logs/refs/remotes/origin/main": "bb8834c5dd1d4117ac7a86d84ad46cb2",
".git/objects/00/0d39130097b50ad753b64ccbde3ac41a71a1d3": "70f73c139b32dbbabcb8a1734a70d18c",
".git/objects/00/16143630d22d3c8e591def8bd49aa3dcb2f3cf": "d1ab36676619f15b501b6e0741363dc3",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/6551bd99607675e08d2497ebd4a8a72e8246b2": "7469f6444a0e8f1c4e51d67de05102cf",
".git/objects/09/dba35276a5173ad42b81d8f6458b432c15c0e9": "b8deb5b3b6062d82e619736fa6dccd59",
".git/objects/09/fca5c54b0a07eedbb1e8936989380a8fa815c7": "fe0761253af5e224c15cfd2a0601b026",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/19/f902028f12025df8ea4643bac243e313436bcc": "d497306d5afccf31f5fa5a52a6046c49",
".git/objects/1b/dca226152513e8bf7e12e2cb3622d8ca4a08ab": "8e4ee98fc7b537880de45052a470c09c",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b0cda1093f3adec3ac9d8ab627cefdc1af9c56": "d5b825d18f83362947eab84cb4ec325b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/72c99d87d03bdf30b2438dc9f861b1d4a1738d": "449a6d8d3b5e2e8fe721aafb0ac13ad1",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/e3ed4895c024d9423ef037884e4b8dec30160e": "6776ef17219fe49ff685e3f747eec60a",
".git/objects/31/a2e7e18751ba4d334e79b8cd9c4a0edf492a1a": "89db299033f5b697293c27f674ef0a15",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/3442ee8a42346095229a7fd2381d9687f04252": "636f816970ca748debc015cfcc23589f",
".git/objects/40/9c1c3eda68bdadc0d819bae3bbcfe9df408b97": "63f2dbfa71d399a19a1f02cecb4142bb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/1356f745ea41514bdf972914d79207f92c9ab9": "a6170ce204fd9e5690653bc6b4656712",
".git/objects/4a/4f3ef42fee7d16e99a647eeddda43a172af8d5": "02df181cc12fad426b8c2708048db47f",
".git/objects/4a/e0d56b2089444900e7c1cd313c2e9750b12a90": "fd23fd6e3cfc8218a49914a2a562be52",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/994c3e0ce63a8f1f80dc1c8c87b90f1e735e4c": "f0ca24e27ed0a8a5b751bb5678601156",
".git/objects/4d/63b4119f075031c2c990df0e20a12653a7bf54": "f2c6e34684cd4041d4842c9be57f0e8e",
".git/objects/50/284cfb438bacc0582c477544c083e0980b2685": "bc2eaf6a1a0911f04ccd3304b33cc2e7",
".git/objects/55/514bca861df9e68f54701b37aba27aa8b9b1a8": "07165e78bd46225142c23eab0c7dbd78",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/60/70b8fe818bab0ecbfa51a8de20d613e0c3231c": "327e5c81b10afae2da46d8c1f7f8e97a",
".git/objects/62/f5f71c822452110b1bebbdad2c07f2ded2c48d": "efe4153a5c83988b8dd46f7caf056ba5",
".git/objects/65/7cfee8f1732de1261886d4af5961121a128216": "dc83973f31433b205df6eb272b6d8b21",
".git/objects/66/80d47f08b5da45f8fde84785f3dfef604c4478": "03fa002f5146f24b03ddf01a0fda2ee2",
".git/objects/69/a331ef7462df8807324edcdfb94711b1d34d52": "42ba61454ca2ceff01a3ca258f373cce",
".git/objects/6a/20e969a9a75b9f957423e691d06b9664fdac35": "f294393832722e2bdb346a9debdd975d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/dec8465ab72d00efddbc9ba2fffd431759858d": "80f3eb033648bfa8bb6d84ec7d4a9626",
".git/objects/71/a3cfc766311b5e10016c320428aac33aab07d6": "411008fa899133e88dc7a89c63658ee8",
".git/objects/74/386b75c4dc082d80b03b5b68c98afb77a01d98": "737b969ad7a9050b6590c75dc37cb367",
".git/objects/74/f83d21add9329c03f6422db0a0ff7c57b4c27f": "803a3c48a293a258645d5a1c2d3abb16",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/e545eae3a17bc51ff7b608f09a21c8d84389e3": "92fd3e0f398ccaaff233371d0c477517",
".git/objects/77/6e9d5dede584085a7e387e0410cc59c6d2952f": "45d4cdf590338191fb81b8e0a357fff3",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/79/68ff4161963e33fab95eae09fb06f1175f42bc": "fea89f38d31511092092987f35ce6891",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/8953aeedb2f1131fb10e3ea12667a2f8c59279": "d0b61ad0c590e45d0116dbb6b874befa",
".git/objects/7f/bdd595b6ff72dd4cba17c05bd5a1e39d6d0ae3": "34a90941f35fea9e2752c903d3a4668c",
".git/objects/7f/c732edd486c551bfdc7f3f5061d08f87dc942f": "50ac749586763f840cb4cbf055ba0ac6",
".git/objects/7f/ff42e8d79c081bacab6ec74bcd876f0fdd199a": "7b4a47c176bac60488a2161b89e9e7e8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/1caf19e70ee2b6bd02f1237e1bb4dcd63b6ebf": "5ea8948ca6f9dd4235ce16cd36820818",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2f8b6212fc41b57165bcd5815e758df468983a": "2491214d6076589c03a2ec1472cd894a",
".git/objects/8a/98e32fae7c35ad9e2420ff0f57736992f367b1": "639069f0418f42e59b0a77a2a49968a3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/99016b71f2abdb4bf7b8e92fb8643db2951e40": "d5685975fdc983012c8e46c5baec39ac",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/de897e77b5bb72d531f35a8c1bd006f534f1cc": "422b70187aedfa92e3064ff3e4c0bd1a",
".git/objects/95/0688298548ab0211ed09b699718bf8a03e978b": "8b5b95e80c8cb197c831de2d2a748760",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/3bb6ad57943d3e3bbe12fb9f9ed6b360551d38": "5057b454d7cc90469ce9649203bab779",
".git/objects/a0/fe3cab6be3874266fa1ecea1a48a4146bca686": "4471467c20b80b81b43fc7e122fcab42",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a8/e4c09ed9681fde2120bbf77b80519caf4c191b": "9e94795de1cb738fc1128321b4ff1c24",
".git/objects/af/4494a27804a69116fe56f0345d1043d1afd6aa": "7a6ff3dd29629475763fbd3953230a6f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/215c8f6460e45c80bb447b010284c60ceb7907": "66f0dcb83d13ba58d4d978c51d97fe51",
".git/objects/b2/f4cd3e86bfbeed610a320af95d71aca16a4725": "890fffba6d0c9dfac58bbb44c1ae8b06",
".git/objects/b6/b8d418e622c66ab2c20e4c694c3ac5df2c1899": "ffa1442a76299ca51d7ce214a2bc6479",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/81348694216925f2c120fabfa851a143fac8f0": "ea8e0261e74c490eda048966b21979fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/03789e563608f2bc24095b58af5a35a98e59a7": "93fe7b187abbf4137fff9aa9898f4e13",
".git/objects/c7/4b4bd40b01661de4cd08c953e863c7e83b960c": "f45204f14c6a26a8975891ecb47f5ac1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/fe2abf473e6d65cf0eaa096efe72a451f675bd": "e919343f3706e9ee5e9d77704efa6e16",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/66685599d3ce24458924aba457ce1141fcceee": "343585f21efc7ae4fc8836e801ae8186",
".git/objects/d2/2df130ef9e330b00f252fa14266355054e659d": "5f3570a21869419dd88d612aadd37e13",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/35f777f46b3afd47648b0a601dc62950004cc0": "1a9e5ddee5527a4fcb8d54d02788a945",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/fb6e0b1436689f2c1340a1b02f44211f3c1a00": "96aef50c52916f3a60e7f4fb8d1e243c",
".git/objects/d6/6f077db4adf5a6fd552eebb017691d985587ca": "13bb33605e0d0d1b1780f75b8aa27c13",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4fde2e088f37fbe42d9681fd11abbf93723407": "45e95e2950c953d40619c9a714825aa0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/49d82decafc3a34b0c605e08b38fd7a2954b38": "ffa6db09d44f426d41c4ab2b5bf79934",
".git/objects/de/8142941e3d418db3c2b57216b0e0a62d1ed349": "770a777c075f6f6852e92d0b2cf4c0f3",
".git/objects/e3/afabc29bc7081693407b63516e44bef755452d": "bb307d24ff2a50c37dda204e0c0f3ef8",
".git/objects/eb/818dae9d13234283bf2b0f1dc6e445d7373599": "1ca06cbd66a76e33fbf06247106dbb09",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/6aa2cf6edbe2f5b7532340c86d891738e4a0ef": "bdb4f87f0d2e1bc371ecd209e118ac1b",
".git/objects/ef/fac16d0d758618634fa494237c01fc2b5d467f": "deda5ff0a392907a9eccfa90ae719179",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/e3f55537e3f2283abe638fe2a7517398dcb014": "b5f2fd9e10626f56d8bcfe11d728edfb",
".git/objects/f8/08a260934abd8a4f3f8734a86a3dcc56ef1129": "0fc403d709848696e6ff214fe6111651",
".git/objects/fc/e7edeb092ed594d788d0fa7f6bda932ec0e9a0": "567450abe9cb0a3590553d529d54e845",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/657dd5540f8b4f8fa970ceab24c07f22a36d16": "79acc4e8e6a1b744880ae7231798a6ba",
".git/ORIG_HEAD": "7a5504f7f56760db3a5f9b953cd48fe1",
".git/refs/heads/main": "b1b56bc2de3560dda42e92011d9264d9",
".git/refs/remotes/origin/main": "ba47931dc6d92d097af430f616a94387",
"assets/AssetManifest.bin": "29a6b9139a87771e13caadd0b225ae3f",
"assets/AssetManifest.bin.json": "7e3a25d280a0a2612f569be398281b49",
"assets/AssetManifest.json": "fcce8469230ecc634698a6e98b1bdfac",
"assets/assets/images/logo.png": "f7bf4b146db878dc33758510b59e9fb9",
"assets/assets/images/me.png": "a02d1c81739fc87ff2cf2a6f732b339f",
"assets/assets/images/port%2520pic.jpg": "b87e74c842496c1880c37e84eb4f1083",
"assets/assets/Mockups/Avocado%2520Mockup.jpg": "3e2c1bea00c6edd117f40f684a0d3799",
"assets/assets/Mockups/Friends.jpg": "835dfcb0595e8cc89bee9b078a3e9b00",
"assets/assets/Mockups/ShopMart.jpg": "a268c76beb44d556fc7ddcc97934754a",
"assets/assets/Mockups/VeganMarket.jpg": "69d075ad071436a9641db379a5d5581b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6809be91dd53af02a17205b66a9b8a44",
"assets/NOTICES": "05e13bc176720b476f12db250194e51c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aa9defcbb9a9fa6d0eac6dea3ab4a16e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b0549a0a8a0122aa81d711729ab1f885",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "57f284f05e4d8ca98e7abcdb567d3621",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd5ac13a596d647120b2d63f15fbe513",
"/": "fd5ac13a596d647120b2d63f15fbe513",
"logo.png": "f7bf4b146db878dc33758510b59e9fb9",
"main.dart.js": "dcf5c4fbb71b3fb1aaead9c7ef83e3b7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
