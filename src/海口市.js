(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海口', {"type":"FeatureCollection","features":[{"type":"Feature","id":"460105","properties":{"name":"秀英区","cp":[110.293603,20.007494],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACACACACAAAAAACAEA@BA@EBCBCBCBEBC@CAC@C@A@C@CAC@C@A@ACAAA@@AA@ABABE@CAAAC@C@@AAA@EBC@AC@EAG@EAE@E@ECG@AAGA@@CAGCE@GFCD@FABHF@B@D@F@DBDBB@DBDBB@BBBABABABAF@DC@G@E@C@EB@DAH@H@BDBBBBB@D@DDBBD@D@D@DBBDBD@BBB@BD@BBB@BBDDAB@DBABCBADADAD@D@BBFBD@D@BABABYLBDAFEFADCRAFCPAB@@@B@@DHDH@D@D@FCB@D@FAF@FWRGBE@CAMB@FDDDDFAJ@BBF@AFAHAF@BABAAAAMCAAOFGDEBEAECEEICCCC@C@ABAB@BAB@F@BF@DBDBF@F@FA@D@BABAD@D@DBJ@HADABCBEBC@ABAD@B@BFHFDDBJD@DAD@BABA@A@C@A@@@A@CDCDEDEJABBHBFBBB@@@B@BA@@BCB@F@BDB@B@BB@@@@BB@@AB@@@B@@@BDABA@AFADCBABEB@@FADABGB@B@BBBD@@@B@D@B@DA@BABEDA@@AAAA@EBABA@A@AD@BBD@@@@FPDFBBBBAB@B@BAB@D@BBBB@@BD@D@AH@BAB@BBBBBAJAHA@CBACCAE@CBEBCAC@CDEHABA@C@@@A@A@@B@B@@@B@BBF@DBDAB@@IH@BOR]dlx`jNDNBj@rCpI^OTGjG^@HBDi@E@@@@@A@@BC@EB@@C@@@A@@@@@@@@@@BA@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@C@@@@@@@@@@@@@@@A@A@A@@@@@A@@@C@@@@@A@@@@@@@@@@@@@A@A@A@@@@@@@@@@@@@@@A@A@@@@@@@@@G@@@@@@@@@@@@@@@@@@@@@C@C@A@@@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@@@@G@AB@BBB@B@@@@@@@@@B@@@@@@E@C@A@@@@@C@@@@F@@@@@@@B@EAAAC@A@@@C@E@C@ACC@C@BA@AAACC@E@EAAAAECAAAAAAAAAAAA@A@AAA@@@A@@AACAACAAB@FBH@H@@@@@B@B@@@JBBBFBD@DBB@B@B@FAFA@@@@@@BABAD@B@DDBBF@D@CGAEDI@K@C@OCICCDQAKAIEG@AEOAG@SAI@KGKGKAAGGCEIGGBACBE@C@GCAAEKEGAGGEICG@GAI@A@@@@CEAENGNAJEDEBCBAFCFKBCHDJCHEBGJEL@LEN@LBLAHCDIBI@E@ECK@ABGBIFGEA@@AAAAEACAEAE@EIAAAA"],"encodeOffsets":[[112968,20181]]}},{"type":"Feature","id":"460107","properties":{"name":"琼山区","cp":[110.353972,20.003169],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACDAFAJ@HDB@BABC@E@C@AC@ACAA@CDGBI@G@E@AA@@A@@@A@@BA@@@ADCBADABA@@DCDCDBB@DADA@@DBD@D@JAB@D@DCBCDADBD@H@F@D@@AAAA@ACC@CAAAECGAC@@ABA@CC@AAAABABA@@@A@CAA@AAABCBA@C@AAC@AAACAACAGCEAAECAA@CACA@@ACCCAAC@E@C@E@G@@@CAE@E@CBC@ADCDCACAAAC@CD@BBB@BA@C@@AC@ABEAGAE@CA@@@@@@@A@AAA@CI@@E@@AE@AAGCEDE@EACC@EC@CBCAEBCAC@@@ABADC@EAQAIACAG@@@ECA@E@EDC@EBCDAHCDABOXBBBFBF@HBD@@BD@BAAA@C@EAI@E@C@CBCAAAAEA@ADCBCBABAB@DCBCDCBCBC@AB@B@DAD@DAD@D@D@DABC@A@E@A@CDEDA@EDABA@A@CAA@ECCC@CAC@ACAA@ABC@A@ABA@A@ABA@CBA@C@C@A@A@AC@AAADA@A@@@AAEAC@@AAA@A@C@ABC@CDC@@B@@A@A@A@A@A@C@ABABABABE@CBABA@ABA@ABAFABADAF@D@B@DBBBD@@BBBDBB@B@@@@A@@B@@@@ABA@A@A@@@@A@@AAA@@@@B@@A@@@@@@D@@@@@@A@@@@A@@A@A@A@@@@@A@@@A@@@A@@B@@A@@AA@@@@@A@@@@@@AA@@@@A@@A@@BA@@@@A@@A@A@@@@@@@A@@@@@@@A@@@@@ABA@@@@@@@@BA@@B@@@@AA@@@@A@@D@@@@@BA@@@@@A@@@@@@@@@@B@@@@@@@@AB@@@B@B@@@@@B@@@@@@@BA@@@@@@@@B@@@@@@@@@BB@@B@@@@@B@@@@AB@@B@@@@B@@@@A@@@A@@@@@@@BB@@@@@@@B@@@@@@@@AB@B@@A@@@@@@AA@A@A@@@@B@@@@@@@BA@@@A@@@@@@B@@@B@@@B@@@@@@@@@BA@@@@@A@@B@@@@@B@F@@A@@B@@@B@@@BADCDEDA@AD@B@FADBF@H@D@@BH@H@DBF@@BD@@BBBBBB@D@BAF@BB@BBB@DBDBJFBBBDBDBFAF@@ABA@@B@@@B@D@@ABC@@B@@@BAB@D@BA@@D@BABA@A@A@A@@BBB@@@BAB@BBB@BB@BB@@@BABA@@@AAA@A@A@@BBDABABAB@DAD@DBB@DBBBBBFDFDDFFDDDFBBB@@B@@BFBH@FAJAFGJAJAHBFFHHHBHAJ@DAB@FDBB@HCHAFAH@BBBBAFAF@@AF@FDFFPDL@BBDEBAEEEI@O@CDGHMLCJAHELAJBHHF@DDF@JBF@B@BDFFFEB@FDFHFAFAFC@GBBHBHFDAB@FCFGBGBEHEHEDMBGF@F@F@FBFI@CA@@@@AA@@@B@@AB@FABIAGB@FBBDBFD@B@B@B@B@@ADBB@B@B@B@@BFB@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@E@@@@@@@@@@@@@@@AA@@A@A@@@A@@@@@AB@H@F@BA@@A@@@@A@@B@B@@@BAB@@@@@BA@AAA@@@@@@D@@A@ABBDB@D@ABDBB@@D@@@B@B@@@@@@@BAB@B@@CHAB@BB@D@J@@@@@@@B@@@@@@@B@B@H@@@@@@@@@B@@@@@@@B@@@F@@@@@@@@@@@@@@@B@B@H@B@@@@@@@@@@@@@@@@@D@BAB@B@D@B@@@D@B@D@HBBAD@B@B@@@@@@@@@@@@@B@D@@@EEKI@A@CDEDADABABA@@BABCBGDCDEBA@AFCLAD@HCB@FEDEBC@AAIAA@G@IBE@CDC@CBA@AB@@ABA@A@A@A@AAA@A@A@A@ABCJKHKDEDEDCFAFFH@DGDCH@DCF@BJDHAHCHBDLDHCJ@FGDMJEFBJBFCJAHHHBFADED@B@DABCACBCBC@A@A@EBAB@DAB@F@D@BAD@BBJCJCDABAA@CAEA@@@ADADAACAA@@@GBCJAHAJIBE@IBAAC@ABA@A@EHEJAD@BBJMDAAEIEI@ACCCEE@CDKDGHI@GCEACCA@ADCBEHEFCDE@CDEAGCCBI@ABI@CHDDDD@DCBEHCN@J@HBL@DA@C@CAIAEBAFBDDBDBDFADABFFHBBFFDDH@D@FAAGEIAEAICCCAECAAAGAE@ACCBEDEDEBC@EDAHALEJADE@IAAAA@A@@GBKCC@C@CBC@A@AAAAAAAAC@A@@@CAC@CBCCCC"],"encodeOffsets":[[113265,20171]]}},{"type":"Feature","id":"460108","properties":{"name":"美兰区","cp":[110.366358,20.029083],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACCAAACBCA@CBEB@BBDBB@AC@@BAF@D@FBD@BA@CCAKAACBGAAEAEE@AEBC@G@CCEEAAEGAECBEBACACCCEAABBFBJ@D@DCBK@GAI@M@GDAFCDC@CCGC@DAJ@BAJDDBHCF@DCFEDGFAFCD@BDBBDDF@HGJCHCL@DFFDDBDJ@JFBFCBINAAC@IBGF@F@BAB@BBDAB@JAFIJGBIBAD@H@@BBBDCBCB@B@@FBDBB@ABCBIDIDAAC@ABC@E@A@CBA@AB@F@B@BADADBDADCBA@C@CFEBGAGGIBEDIAEAIFCNEHI@GDKCACDGBGCGAIE@CDG@CDCHG@EEEBCDCFCFGLILAD@B@B@B@BBB@B@B@B@BAB@BA@@BAB@DCD@DAF@J@HBBBJ@BADCFEFA@GDC@KBED@BABCFCDAHADAB@@ABABCBCBCF@D@BLJFF@@C@A@@@@@@@@@@@@@A@A@C@ABGAC@A@C@@@A@C@A@A@ABC@@@@@@@@@@@@@@@@@A@G@A@A@@@@@@@@@@@@@@@E@@@A@@@@@@@A@@@@@@@@@G@A@A@@@@@@@A@@@@@@@I@C@A@AB@B@@@@@@@@@@@@@@@@@@AD@@@@@@@B@@@@@@AB@@B@@@@@@@B@@BB@@@B@@@BB@@@BB@@@@BB@@@@BB@@@BB@B@@BB@@B@BB@@BB@@B@@B@@B@@@@@@@@@@@@@@@@B@@@@@B@@@@@@@@@BAD@B@B@@AB@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@BA@A@A@CAA@A@A@C@@BC@AB@BAB@@EBA@@@Q@EB@@WHULB\\PlRRPJhJ\\DRAvA|KVEfK¤kfGL@PDDAB@HGDEBG@@DCBABAFADAB@JGFCBCBABCBABCBA@C@@@A@E@E@CAAAA@A@AB@DADADCJAHAFCFA@ADAB@B@@@H@@@B@@A@A@A@@FAD@BC@A@C@C@CBCBABAD@DA@@BEDE@CDCBK@CCC@C@CAAB@B@B@B@B@D@@@B@B@BB@AB@HEDCD@B@BEBAB@@AB@@ABABA@CBAB@BABCBABCAEAC@A@AAC@ADCFCBE@CBKBC@@@@@CAEECEEAEBEFKB@HAFBFBFBF@D@H@B@DCBEHGBAB@HCBE@AACGCCCCAGCCGACFCBCBI@GBGDE@CBAAA@AAACAGCA@ECAA@@@@@@C@A@A@@@@@A@GAC@@@@@C@EBED@DEHBD@BCBABAAACACEBEAC@ACAAAACCACC@CCCCACAA"],"encodeOffsets":[[113302,20269]]}},{"type":"Feature","id":"460106","properties":{"name":"龙华区","cp":[110.328492,20.031006],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AA@@@AAA@@A@@A@@A@@A@@A@@A@@AA@@A@@@A@@AA@@@@@@@A@@@BA@@@@@@@A@@@@@@BC@@@@@@@@@@@@@@@@@@@ABA@ABADG@@@ABA@A@@@@@@@A@A@@@CA@CABAC@A@ACBAB@@@@C@@@@B@BBB@@A@@@@BA@A@@@A@AB@@@@@@BB@@A@E@GBA@@@@B@@@B@B@@@BB@@@@@@@@@@@@@@F@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@A@AE@@@A@A@AAABC@@@A@A@A@AECCAAA@EHAJBBA@EBA@@@A@@BB@@@@DBJ@AE@E@E@EHENAFCFGFGHAHADE@EBAECAGAGHAD@BEBEGECE@EFAEECE@A@AAE@ICE@CGEAGBIFKBGDINKHGDCP@J@FFBFFAAC@ACKEOCE@EBE@@BEBEAAAAG@EBGBGDA@CA@EBA@CBIAGGGEGAEBGBIHIBEBI@EAGAE@@@AA@AACECCEECCCEAEAAAA@CAA@CBC@CBABABAAC@A@CAG@GACAAA@A@A@EBE@A@A@CBE@A@C@CBC@@AAACACBCBEDCBA@EHAJAH@BDL@F@FAJCJGDKBKAM@KFK@IFAHGFIDGCADELEDABADCFIFMBMHBFDF@@@@@BBJ@HDHFJHHHBLFBFDB@H@DAFBDHAJHDFHHBBHLHL@LBJ@TBHFP@BFHBJBLCRDDDJ@P@D@LCJBFDHC@E@AACCA@C@ABAB@@@@@@EBEBA@A@A@CAC@EAAAIA@@A@A@@@@@G@G@EAA@BBBDDBBB@@@B@@BB@B@BBBBBBBBBBBBBFDBBBB@F@FDDBB@BABD@D@BDD@F@D@@@B@D@BBFBA@@@@@@@E@@@@@@D@@@@@B@D@F@@@@A@@@@@@@@@A@A@AAA@@B@H@@@@@@@@@@@@@@@B@@@B@@@@@@@@@@@@@@@@@B@D@D@@@@@@@@@@@@@@@@@@@@@H@@@@@@@@@B@B@@@@@@@@@@@@@@@B@B@B@@@@@@@@@@@@@B@@@@@D@@@B@@@@@B@B@B@@@@@@@@@@@@@@@D@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BAB@@@@@@@@@@@B@@@DA@@FAD@@@B@@@@@FCjBBBBDDVKXG@@FAR@@@B@FA@@BA@ABAD@@AD@B@B@B@DBB@B@B@@A@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@ABA@@@A@ABC@A@@@@@@@@@A@@@@@A@@@@@@@@@@@@@@A@@@@AA@@@AA@@AAA@"],"encodeOffsets":[[112991,20512]]}}],"UTF8Encoding":true});}));