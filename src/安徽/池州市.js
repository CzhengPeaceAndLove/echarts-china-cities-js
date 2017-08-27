(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('池州', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341702","properties":{"name":"贵池区","cp":[117.567264,30.687219],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@TFRLHBJD@B@BA@@@@B@BB@@BB@B@@@B@B@BBB@BBD@JBFCDBB@B@@BBDJBBDDBANDDHD@FABBBBBBBDB@@BBBABADAF@DADEDEBGBE@CAACABCDCDE@C@I@KDEJCBCBGECCAICACGCCCAAACBGHALBNHH@HCBEACEEAAQIIC@CKIFG@AAGEDIDG@G@EAECEEACAA@@CECGCEOIG@EC@EAACAE@EAEEG@GCAC@E@@BEDEH@FA@@DE@CEECC@A@EAACCEAG@ACACAC@CDAAGWBDReK@@kDGHGPBB@BABEDEDA@@D@B@B@@@@BBB@BBD@CLAB@B@B@B@B@@@@@BD@@@@@DBB@BBB@BB@BB@BDDB@B@DHBJHFDDDDDHFHHFFFHDHFJFFBLDJBNBB@B@FDL@LBDBF"],["@@BH@BEHLJ@DJDRJBBFFBDAFGDG@MGKAGBAHBDBBDDHDBDJDDBFDAHADIDCF@L@J@DCFCDADDBBB@DAFAHCFCFCBE@CBABABAA@@CAAAAAAABA@EGCCCBMCAACIAAC@AA@A@CAEDIAC@AAA@AAA@A@@@A@A@@AA@@A@A@@B@@A@AICGAQKSEDJFJBLBJ@P@D@DAH@@CJAHABCFEFCFIHADCDMJIJEJAL@H`PPFHDdPFDPH^RLHPHPHRDPFPFFBNFZFVDjDNADADCBADADAPEB@VETCLAL@HAF@J@J@D@J@B@D@B@DBHBHFDBFB@BBBBBDFDD@BDDBDBD@DBBBD@BBDBBBB@BBDBJBJ@@FBBFHDbNJDXLLDTHbNbJLDNDVFBJBRBBBD@B@NDNJNLJHZT@CAM@@@ACE@CAABAFBJ@L@J@B@FBD@DDNJBBHFFDBFB@B@BA@ABCBAJBB@BABC@EDEBC@GAA@CAAAAEACA@C@ABADADABADAF@@A@A@ABAAAACCC@A@@@A@AB@BAB@NBN@B@FBJBB@B@BAB@@A@A@@@CAACIAA@A@AB@BAJ@NAB@B@@B@@BB@D@B@B@@BB@@B@B@@ABA@@@ABAA@AEAA@ABC@ABA@@BAB@@C@AAC@A@@BA@@@A@C@@@@AC@@@AB@@AD@BA@@@@@A@AA@AAA@CAACA@@AA@@@A@A@@AAA@A@@@A@@D@B@B@B@@@@A@@A@AA@A@A@@@@B@@@B@D@D@B@@A@A@@@AB@B@@@@ABA@@B@DABABA@@@B@@@B@@@BB@B@B@D@BAB@BAB@BADADABABABA@ABABA@@BA@C@@@ABADADC@@@@CA@A@@@@@@BA@AA@@ABA@@@@@A@A@E@@AB@@A@AA@@@A@AAA@@@GAGAGCEAAECEECEEECEEEGCECEAE@KAG@IBE@E@CBGAGACACAGCCACCEGAE@@AGBGACACEEEECE@@GICCCICCCCCEEGCEGEECGEEA@@@@AA@@AA@C@@AAA@@ACAA@C@@@@A@@@A@CAA@@@@EAA@AAAAA@@@GACAC@AA@@AA@ACA@A@@@ADABEBAA@@A@@@A@ABA@CDABA@@@@C@A@A@CCCA@@@@@A@@@A@@@@@@@A@@@A@@@AB@BAB@AE@A@@@ABA@@AA@@@G@@D@FB@@BB@BBB@BBB@@@@FA@@@A@A@@B@@B@BB@BAB@@AB@@A@A@@@ACAAAB@A@@A@@B@@A@@BA@@DB@@BC@@BAB@@@@A@ADA@A@@@C@@@AB@@@BAA@@A@A@@D@BA@@A@CAAC@A@ADE@@@@A@@A@AACB@BBBB@@BB@@@@BA@@DEFI@@B@@@B@@A@@B@@@@A@@@AB@BAB@@@DAD@@AB@BAB@@@B@@@BABBJCB@B@FBFDB@B@B@@@B@@@@ABA@@@CB@@ABAFABALELEREJAFCDAJCFCDEBE@EBICGEGAGAGAEAIBE@KBG@A@KAK@K@IAI@GAIAEAECECEAEAGACEKGIGEEGGGKAI@EDCDI@CAA@ACCECBQ@KDEDIFGFGDE@AAAA@@@A@A@@BA@@A@A@@C@@A@@AAAACAECACAAA@C@@BCB@@A@AA@@@@@AA@@@AA@@AA@@@G@GAEAGAAAE@A@@CBA@AFABADCDABCBAB@@@@AACAA@A@@B@@A@@@A@@@@A@A@A@@BA@ABA@A@A@AA@E@CBA@ABAB@B@@@@A@@@@D@@@B@D@DABAB@AI@AB@BA@@@AB@@@B@@@BADA@@@A@@AA@CAA@@BA@A@@@AA@A@A@@@A@@@@AC@C@A@A@@@@C@ABA@A@@AA@@A@ABADBD@@ABA@CB@AA@@@@@ABA@ABABEBC@A@@B@BBD@BBF@@A@AAA@CAA@AB@@A@@BA@AD@B@BABC@@@ABA@CAA@A@C@AB@@BH@BEDGF@@A@C@A@EAA@A@A@A@@@C@EAA@A@A@A@A@C@A@@@A@A@A@A@@@CAA@A@@@A@A@C@EA@@@@AAA@@@A@@BAB@@A@A@A@@@ABABA@@@@F@BAB@@C@ABC@CDA@E@ABADAD@B@@C@A@G@C@ABA@A@E@A@A@A@@@@ABABG@@CAECCAA@EAKAGECCA@A@CBABA@@@@@CAA@A@A@GBKBGHINCFCLEPCLAHAJ@HAJCFEBG@KEKEIEOK@@BAAA@@AAA@CA@A@@@@C@@AA@AACA@@AC@CAA@A@@@ADE@A@@AACBA@ABA@@@AAAA@A@AAAC@AAA@A@A@AA@AABA@CBA@C@ABA@A@@@A@CBCBA@A@@BA@ADA@@BA@A@@@ABABC@QBQCOEMGKEMCMAA@AB@@@BB@@BAB@BCBA@@DA@@B@@CA@@A@AA@@@@@ACA@@AA@@E@AAA@@@A@@@@@A@@@A@C@@@AA@@ABA@@B@BABAD@@A@@BA@@D@B@@AD@@ABA@@@AB@@@B@B@B@@ADA@@B@DA@CBABAB@@@@CAAA@@@AB@@@@AAB@A@@A@@A@@C@@BA@@@@BBB@@@BBB@@@@A@ABAAE@A@AACCAAA@EAA@AACCAACACAAACAAAC@AAAAAACAEAAA@@@@DABA@A@CB@@@BAB@B@@@@@@@@A@@CA@A@@AAA@@@@A@@@@BA@@@ACAAAM@OBKAA@IAM@M@GDCNCFEDM@ICQEOCI@E@EDEJAJ@LCJGJA@CFCHBDDFBD@F@@CDCDCF@HAH@H@JDFDFHDFDBF@HCFIDKBC@E@KAE@GAMAMCQ@IBEBGDCDCJAB@B@D@FFHFDDDHFHDDBFBDDNNFFBD@BAF@L@B@BD@HBDBBB@BBDBBB@B@D@BADADAB@H@B@BA@@BAAA@ACA@AA@@A@A@@B@@AD@B@DBFBBBD@B@F@@AFBLBB@DB@BHOHGlC@@fLCQXABHFBJ@J@HAJEJEF@FBPJJFFD@DKLAHBF@BFFHB@@JBDDDJDJDFDBNBBDDFDF@J@HAHAH@BCF"]],"encodeOffsets":[[[120060,31277]],[[120139,31223]]]}},{"type":"Feature","id":"341721","properties":{"name":"东至县","cp":[117.027618,30.111163],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@ABAAA@ABAB@BB@@B@@B@@@BB@BCAAA@A@A@@CBABCAAA@AC@AAAA@A@@@AA@AAAAAC@AA@BCC@A@@C@E@A@@BBD@BBDC@C@CAAAAAA@@@A@AA@@CBABA@CA@@AAA@C@CAA@@@CAA@FFBH@HAB@BEFGFMCS@CDAH@D@BDDDBHBDBJBFFBHDD@DDFDHFJBBDH@A@@@AB@FCBCDGFEDEDEBA@ABC@@@@@@@A@@@ABA@@BABA@@@I@AB@@@@@BB@B@@B@@@@@BB@@@BB@DAB@@AAB@@C@AA@@@A@@@C@@AA@ABA@@A@@AA@@A@@BA@@@@BBB@D@B@@@@@AB@B@@@@BAHCB@@BDD"],["@@IQEICEEEEAE@@@@BAB@@@BBB@@@@AB@@@@@B@@@B@BBB@@@B@@@B@@@BABA@@@A@@@@@@B@@B@@BBB@B@B@@A@@B@B@@AB@BA@@@@@@@@@A@@B@@A@@@@B@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@BA@A@AB@@@@@@A@@BA@@@@@A@@@@@A@@@AB@@A@@@ABA@CBA@ABA@@BMFCBCDA@CHAHEFCBADEDGFEFGDIFEDEDA@EFAH@BBFFHDHHFFFVRFDB@DB@@B@DBD@B@BB@@DBB@BADA@@BBB@@@B@BBBBDBD@D@AC@AAC@AB@F@D@@@@BDD@ABBD@BBBB@BBB@@B@B@BB@BBDB@BBADAB@DB@B@B@BBADA@@A@@@AA@@@AAA@AB@BBBAB@B@B@D@@AD@B@@@BA@CAC@A@@BA@CBA@@AABBBAB@B@B@BA@@@@B@B@@@@A@@B@@@@@@@B@@@B@DA@A@AAA@A@@@@A@@@A@BABCFCFEFCHADEDA@@B@@@B@BDHBDDBBBFBLDB@DBBBFDJPFHBD@@JFBFFDDBFDLBLJDJBHBDDJ@BHHFFLJH@NADCFEDCDAFALBFD@@DBDDFDFFHDLFFHBBDFDDBFFNLPDFBDBBJHHDFFDDHHB@HFJJDFBBFFFJFFHHDDFFHLBDBJDH@DFJFR@H@B@FBHDFDFDHBJ@HAFAFAFABABADCDCDCD@BIFQJGDCDGAA@CAGCEEEAEC@@A@CAAA@@A@CBC@A@G@@@@@AE@C@C@A@A@@DA@A@AAAA@@@A@ABA@CHA@@B@B@B@B@B@B@BAB@B@B@DBB@B@@CB@@@@BB@B@@@B@B@@@DBBB@@BADBB@B@DAD@@@B@B@@AB@B@BBDDD@FADC@E@GCGCICGCEACAC@@@A@@@AB@BAJABCDCHEJEJENAHCBAAI@CDCBCD@DAFAHCFCDC@IAGBKPPLLHLHHDBBJJHHXVBBFF^ZFFFDLPRVNRHJNXLT@@BD@@BDDFBD@HFX@BDNFZ^dTRBBNJLFFDBBNHHFHPBD@DBDBDBTBNABALADAFGTADCFADCHENA@AFG^ADAHAD@D@@CJIX@DELCLAFCNAP@DDHDHAF@D@NBJHFJDLADELM\\VFDFBDB^F^PTPDDBBRT@@FDLJHFHFNLPDPFD@B@B@@@D@D@B@B@J@B@B@B@D@B@D@B@F@D@B@J@B@F@B@D@D@PBJ@@@D@L@P@N@D@L@NAF@D@XEFCHCFCLGJEJCFCHCLCHAPENANBBB@C@ACAACA@@AAAA@AAA@CA@@@@C@@A@@@@@A@A@A@ABADKC@AAA@AA@@@@@A@A@CB@FCFCBA@AAA@ACAA@KAEA@BE@A@C@AAEACAA@C@@BA@@@@B@BB@@BDB@BBBAB@@ABA@G@A@CBCBABC@A@A@AAAC@AAACAGAC@@A@A@KBE@AACEEMMCCEACAGCGECCECEG@E@C@ABADIDCHCFAJAR@NDNBHBF@LBF@D@LAJCDE@GAEECGCCECE@I@GBG@GDEDCDC@@@EACCEACDGDEB@HIDI@KBIFIFCF@J@PDRFJDN@FCDEDMHCN@N@JBB@LBPAN@AAA@IGEEECKEOEKAOCEAIBGEMEGCDEDEJKJMJCHICEBE@IDE@A@A@CAEDADA@GDGEEMACC@AJA@CFAF@PHBDJFHCDBFFJDD@FCJCFABCHGHALGHIDABCBIDGBE@CKEHA@CACGCEGGGGGCICC@I@EDG@KNGJGDKCE@AGIA@GEGEEGEEEEAC@@@CAI@KAGCE@AEGESAG@AAKCM@K@KBEDG@@DKBIAIAGCCEIYEI@OAICKAKAE@C@GAECAAAECI@I@GBA@C@A@IBQBOBGE@EAA@GCMEI@MBKCECCCMAIEIAA@KGICGCCCEEAE@G@E@EBCDGDKAI@@@EA@AEECIEGAEAICECECCGEGGEEGEAIAO@CACAAC@CBEDEDABCHAHCFEDCBEHCHAVERE@AF@LGDEDG@@BEDIBKAEEEGEECICECIIGEAG@GHEJEHKDG@@AGCIEGGGKGOIOGCACACAEAGAGAG@AAEAGEGEGCGAKAEAI@ABE@IBOBKDC@G@A@G@EAKCECGCACEECEAEA@@ECEEECC@@EC@@GCGAIAIAI@GAICGCGCGCGEKIMEOIOGIEKCGCGEGGCGCEEEEGGG@@EEOWCAAAEA@AA@CACCCAIAMCC@EAA@K@KBGBA@C@A@@@A@E@GBCDA@@@@@AA@@@@@@A@@@@@AA@@A@A@@BA@@@@@A@@B@@A@@B@@@@@B@@@@@B@@@BA@@B@@@B@B@B@@@@@BBB@@@@BD@B@BBBBB@@@BBD@@B@@BBB@@@B@@@@ABA@@@@@A@@@@@@@A@@@@@A@@@A@AB@@@@A@@BA@@@@@@BA@@@@@@@A@@@@@A@@@@@A@@A@@@@@@A@@@@@@@@@@@AA@@@@@@@A@@A@@@@@A@@@@@ABEDEF@@EBECGIECAAC@GAGE"]],"encodeOffsets":[[[119519,30404]],[[119542,30296]]]}},{"type":"Feature","id":"341722","properties":{"name":"石台县","cp":[117.486306,30.210313],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCCGAEAG@EACCCGAIFI@IAIAI@KAGAICGEECICEAC@MDG@I@EEICGCIAEAMCECIAGCGAMDFJDDBHBJAJCL@@CHAF@L@LDNBL@BBHFTFH@BDFBH@LBJ@D@@BDFFFFFHHFHFB@HJ@BDFCLIHMH@LCH@F@JDDDJHHHHFHHDBD@DGBLF@DAFCHAJADCBGJKHGBGHADEBIDEDC@ICEECAGDIEACOGE@EB@DIB@BDDNBFFCH@HCBCBBF@D@B@BCF@JAFDFGJIDINILCFCFHDNFHFJAFBPDLBPFLFFDFFJHB@BBBBDB@B@@AB@@@@@B@@B@BB@@@BDB@@@B@@@@@@A@A@AB@@A@@D@BABCB@@@@BBFBDBBBBBBBD@BBDBBBDBDBBBDDBBB@FBB@BBDDBBB@F@BBBAB@@@@@AA@A@@AA@A@@B@@AD@@@@BB@@@@BBA@B@@A@@B@@BBDB@@@@BABADAB@@C@AB@BC@@@A@A@A@@BA@@B@BA@@BC@@@A@CB@@AB@@@BCBA@A@AB@BA@@BB@@D@B@@@B@@@@@B@@@B@BBF@@@BB@@DB@B@@@@BBB@@@DB@@@AB@@CB@DA@ABA@AA@@A@@BAB@NBNDLFNHPFRDRAD@BABA@@B@B@@AB@BCB@@AB@B@DADAB@@@B@B@BAD@B@DAB@BA@BBBB@B@B@BBD@BB@B@BBBBB@@B@BAB@DABB@@@BCF@B@@@BBB@DBD@@DBBBB@@BD@@@@@@BDBB@BB@@BBAB@@PLJFLFLFH@FADEBI@GBIBGDKFODKDEJMHGLAHAB@B@B@DB@@@@B@BADAB@B@DDHFLBFBB@DBFDDB@@AHAB@B@@B@B@B@F@B@B@BAD@H@B@D@@@@ABCBCBAF@B@DCD@BAD@@@BA@A@E@@B@BABA@@B@B@B@@@BA@AB@@@B@BB@@@@FBD@B@B@@@B@B@DB@@B@B@B@B@@@B@D@B@B@B@B@B@FBD@@@B@B@B@B@FBB@D@B@@@HEFC@AAG@@BAD@B@B@DBB@BA@@D@BA@A@ABCB@@AB@@@BAB@DBB@BBB@@@AE@AAC@A@AB@D@FABABAB@BA@@@@B@@BDAB@BA@@ACBCBAB@@@BB@@@BAB@B@D@@B@B@D@D@@B@@B@@@B@B@B@@B@@@BAB@@BB@DBB@@@B@@CBAB@@A@@@A@@B@@ABA@@BBJA@ABCBC@A@@@C@@@@@@B@@A@A@AB@BAB@D@FBBB@B@B@BAB@@AB@B@B@@@@@@B@@@BA@@@@BBBBD@B@@A@ABADCBCDABEB@BAB@DB@F@BBHBFBHBH@@@B@@BB@@B@@BB@@@@B@@B@BA@AD@@@DBBDBDBBFBDBB@BB@@@@DB@B@@@AB@@@B@B@@BBBBF@HCHEJEFCLCR@DADFBDB@DBJ@DCFCJ@LBHHFHHFHJHGJAFAHCFAHANAJDHFDJFHHHHHHBL@DAHAFAJ@LBLDFBHFLFLBJALETGLCJ@H@HBBD@H@DGJAH@FBBPOFABAFGBCFM@@@AB@BABA@ABA@@BAACB@BA@@AA@@ABCBA@@@AA@AE@AAAC@@@@@@C@A@A@@@A@@ABABA@@DAFA@A@A@@E@@@@A@@@A@@@A@A@AA@A@G@C@A@A@@AAA@A@@CCCC@AAAKAAA@CDGHE@AAAECECG@G@KBG@CCBEBG@E@GBGFG@@AAEAKCEAE@K@E@IAEAKAMCGCEEGIKIKKAIBKDGFCJAHAHANEFALAFE@IEICIAGCGK@OIOIK@I@EEIEIKKGIEGCICGCMAOAO@KAM@KAKCOCWEIA@@AACAA@E@A@A@A@@@A@A@A@CA@@@@A@BCACA@EAEA@AC@AAAACAA@A@@@@@AABABADA@ABA@AAAAAA@@AA@CAC@A@E@C@@CHE@@@AA@A@@@ACA@AA@@B@@ADAB@BCB@@AA@@AAA@@@@@BCB@@AB@AA@@B@BA@@A@@@AA@@@A@C@I@A@ABCBABCHI@IAAECKAACA@@@@@@BC@@@ACA@@@@CD@@CCAAA@C@@DAD@@A@EBA@CDCDCDABC@A@@BA@@B@B@FAD@B@B@B@@AB@B@B@B@@ABBB@B@@ABAD@@AAA@A@AAA@C@CBAAA@A@@@@A@@B@@@B@@@@@ACA@@BG@@@ECA@AAAA@@AAA@@ACEAAA@@AA@C@@@E@@@A@CAA@A@A@AA@CA@AAA@@AB@@C@A@A@@A@EA@@A@C@A@@AA@@AHAHAD@B@@A@A@AAC@@A@@A@ABC@A@A@AAA@A@@@@A@AAA@@@AAA@AA@@CCA@@@ABAB@@@@BD@B@@@@@BA@A@@@A@@AA@AB@@@BB@BDB@A@@B@AGCAB@@@@@@@B@BBB@BB@BBBB@B@B@@@D@@ABC@@@EBA@AAC@@@AB@@@B@@@B@B@BCB@BAB@@@BA@C@@@@@@AB@@@ACBA@AC@AAA@@ACCEAA@AA@A@A@AAGB@@CDC@@BABAB@B@BB@@BA@AAA@A@A@@HDB@B@DB@@B@@@@A@AA@@AA@AAACA@AAAAAAAA@@BCBGBA@A@A@@BEBEBGAGDAKEKEKGICKEECIAMAM@KBIBIBI@KBIACAGGCECEECCCIAKAE@KBGDGFOHUBMCAA"],"encodeOffsets":[[120211,30750]]}},{"type":"Feature","id":"341723","properties":{"name":"青阳县","cp":[117.84743,30.63923],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@K@GAGGGGEGCIGEICMBGBEBGDEBIBGHFLBDBHBFDFDFBFBFBJ@HBJ@J@LBL@L@BAH@LAFBJBFBHBHFHDHAJ@FAFCFEDIDCBEDIBQFKFKFABEBAB@BA@@D@@AB@B@@A@@@A@A@A@ECEAA@A@IDAAAB@@A@@@A@ABA@@BC@CB@@A@ABA@@B@@@B@@A@@@@BA@@@A@@@EJCF@@AB@@@@AA@@AAAAA@BD@B@BB@@@@@CF@B@BBDDBB@@@ABC@@@@B@BB@AB@@A@@B@@@D@@@BCB@B@B@@A@AB@@AD@@CA@@AB@@@BA@@@@BB@A@BBDB@B@@@B@BA@@BA@ABA@@A@AA@@@@B@B@@EB@@@@AA@AAA@AAA@@EAC@@@@H@@BB@@AB@B@@@BBFA@ABA@@B@@@B@@@B@@@@@@@B@@@B@@@@DBDDB@B@D@@@@@ABCB@DAB@B@B@@@BB@ABAFCB@B@@@BDB@BBB@@BBD@DBHB@@B@BBBBB@FB@@@@BB@D@B@@@B@@D@B@DB@BB@BB@@@DBB@@BB@@@@FBHFFDHFDFFHDFDDDDDJDDHJ@@DFFFFFBDBDAHBH@@BFFHDDDBHDDBDBHBHBDAF@F@JAH@LBF@FBFDHDFFDFFFDFFFFDBBDFBHBH@H@@BB@B@B@@BBB@@@BA@@@F@B@B@@@@AB@BB@@BAB@@@@@@@BDB@@@@CDCBAB@B@@@DAB@@ABAB@BABABABCBCBABA@ABA@ABC@A@A@A@@A@@@A@@@A@@ABABCBA@@@AB@B@@A@A@@B@@@B@BA@C@C@A@@@A@@@@@@B@BBBB@@@@B@@A@A@A@C@@@@B@@@BBB@BB@B@@@B@@BB@BDDBB@BBB@@B@B@@@@ABC@@BA@@B@@BD@@@@@D@B@@AB@@@BBD@B@DA@AB@@AB@BAD@BBBBFB@AB@B@@@@@B@@@B@@@@@BB@@B@@@@@@B@@@B@@@B@@@@@@@B@@@@B@@@@@@@@B@@@B@@B@@B@@@BBB@B@B@@B@@@AB@B@@@DBHDHDJDDBHBFDFF@J@FBFFHJFFFJFJFFFFDFFFBJDHBD@D@J@JBJBLDHDFDFBFFBDFDDDDFDBHDF@HABAFIDEDCDCBCBCDAFDBDBDBDFFHFFHJJFBNFBCBCCC@EDADA@GCEIKKKEGEGEGCE@CFCH@J@B@JADCFCDIBABC@AFCDAL@HA@@JALAJ@HAHADAFAHCFCHEDGFEJEFANGDAACA@@ADAB@@AB@D@BABAB@B@DB@A@A@ADAB@@BB@BDD@FEB@@@BAHBABBDD@DBFBBGFAB@D@BA@CBCACC@AEJCFIFGHBF@DCBEDACABI@GDENAAEEGIEEGCE@GBCGGI@EGCEACACAACCAEGAACDCBEAGAE@GIIAAMGAAGCGEAGCICICGACAC@@ECIAIBIAICIGEEEGEEACCAAAECECIAEAEAEAG@G@IAGCGEGI@IDIBI@A@GAGAGACCGCCGGCGCCEGMGGGCGAACGACCICIAKAAAIAK@EBCAM@EAAAMAGAGAE@ACI@C@E@EBCBGFGFCDEHABG@C@KEEAACCGEAAACGCCCE@ICGCECEECAAA@EBGHI@C@GACGAG@I@KDSHKFIBKAKEGEEAKCKAI@EBGBCB"],"encodeOffsets":[[120665,31076]]}}],"UTF8Encoding":true});}));