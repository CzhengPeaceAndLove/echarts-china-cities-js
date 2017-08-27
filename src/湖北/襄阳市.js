(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('襄阳', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420602","properties":{"name":"襄城区","cp":[112.134052,32.010366],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@LAN@JA@AF@HCHGDE@A@GCGAKCECGOOGGEEEMCEMKAAE@E@UCEA@@ECCAAKACCCACAEKEGC@@CAAAEACECEBE@@ACCAW@EAIAAAA@EAECECCEGECCGICCGAE@C@IBGDADCBE@C@I@GAA@A@EBCBCAK@GAADC@GAGDCDGHC@C@E@C@ABCBCFCDAD@HCDABAJ@@H@D@FAD@@@BAFCDCDAB@B@@@@B@B@@DD@@BB@B@BADCFCBEDCDEFE@CBADDFF@B@PAFBB@FBFBDB@B@DABBFFFDFBF@F@DAFEJADAF@FBDABED@B@B@B@DELADAF@FCDAFCFAD@@A@@@@@A@G@AAEAC@@@AB@@A@@AAB@@@BB@@@@B@@AB@@@B@@A@@@A@@B@@@B@@AB@@AA@@A@@BA@A@@BA@AA@@ABIFABC@@@A@@BAB@@@BB@@B@@AB@@A@A@AAA@AAA@@BA@AB@@@@@@BBB@B@@@@B@@A@@BAB@BA@A@@@A@ABABA@A@@BAB@@@@CA@@AB@@@@BB@@AB@@@@@@AB@BA@@ACLED@B@BBD@D@D@FADE@AACGAA@@AACAICCAC@A@ABCDAFA@EBC@CA@CBC@CAAAAC@C@E@A@C@C@ABA@C@AAA@CB@BCFABCBE@C@A@C@ABABA@G@@@AB@@BBD@DFF@BB@B@B@BA@A@A@AA@A@@ABAB@BABABABCD@@EDCBEAGAEAC@AAAAECQOGEAACDA@AFCBAB@FCBCBC@IAE@ABAB@F@BBBBBH@HBDBBB@DBDAF@FA@C@AB@BA@CBA@@B@BB@@BIDE@CBABG@GAC@ABABAFAFBBBF@@@@BBB@B@BABA@AB@DBDA@BB@BB@@@BD@@BBDA@ABADCB@DABAB@B@B@@BD@@BFBF@BBB@B@B@BBDB@@BBBBBAD@@CF@@@B@B@@BBFAD@B@DAB@@AB@@A@EBEBC@@BAJBF@F@FFBBB@FBD@BDBB@@BB@D@DAB@DAB@DBB@B@BBD@@@BCFH@JBL@D@@@BBD@@BDBB@@@JHB@DDH@B@J@D@DBDBB@B@B@D@D@@AB@@@@@BAB@B@B@BB@@B@@BB@B@F@B@B@@BB@B@P@D@B@BAH@B@@@DA@BB@@@BA@@@A@@BAB@@@FAB@@@@BB@@BB@@@DADAB@DA@@FBB@D@@@FDB@H@JBBBDBBBDBBADC@C@CBC@ADABA@@B@D@B@DBFBHDDB@@BABAFGDCDABA@@BAFAFAFABAB@DCBCBCBA@E@@@@DEBC@@A@BA@@BCKEBCFEBADH@@@BD@@@@AB@BC@@B@@@@@AD@@HB@@BA@C@@B@DBB@@BB@@@@A@@DBFH@FDBBABEBEFEFAH@F@B@D@B@D@F@DBDBLDF@HCFAHAH@@@F@F@D@B@B@FB@@DBDBHDFDB@@@@B@@DBBBDBBB@@@@FDBBBBB@BB@@DDBBBBDCLETGLCLGFCHS@ABODMCIEQI@EACAIEEAMGCEEC@@IDIBEBMD@F@FI@A@IECMDMFOBM@ABG@@@GKUDOBA@GGCCCCAICCAGAE@K@GEDEFGAI@ACEBKLE@MGIFANEHA^BD@PCD`LBAQBLBBBFBLHDXDFJR@DBB@BB@@BBB@@BBBBD@BD@DB"],["@@LQBABCDCBCBCCAC@@AACAA@AA@AA@@AAA@CAQ@EIWCGCAKAEAAAKBR@@@D@FK@@KC_ODC@]AGBMFEBHJ@NKFALDF@BBJEHCFHFL@F@HBDBJDDBDDHD@HABCPLV@H@@AH@BANEPCNDNJFB@J@@E@ENCFAJAJCCE@CCGCO@E@A@G@A@ABMP@NCJEDEJK"]],"encodeOffsets":[[[114898,32672]],[[114886,32690]]]}},{"type":"Feature","id":"420606","properties":{"name":"樊城区","cp":[112.135684,32.044832],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCBCBA@EC@E@C@AA@@@@CA@A@A@C@ABA@C@A@AA@@AA@AA@@AA@@@@@@@A@ABA@@ACAAAA@@@@@A@@@C@ABA@@@@BABABAFCBCB@@A@@BADCDCBA@@DCDEDDBDBH@@FF@@HDBBB@@@FBDBD@FDD@@@B@D@B@@@FABA@@JGFCDCBCDGFK@ABEBGBM@CAC@CCACCAE@CBCDEDC@@BC@C@GAC@CCKACAGACEECEMECAK@FRDJCNAP@BGTEDKHKDSHKFCDAAAACC@@AAA@AAAAEC@@@@AACAAACA@@@A@@A@ECGCCACA@@EAA@A@C@E@E@@@G@GBEBGDE@KCCACAE@C@A@C@A@E@G@EBEFAFAFABCA@EEGCA@@@B@@A@@AA@CAA@@@@DAB@@GA@@BC@@@@A@@@ADA@@B@@C@@A@@CGABEFADLFAD@@ABB@@@ADCF@@@@@FABADADCDA@ABEBEBEBAB@@ABCBCDEHABAB@@CAGCEACAA@C@A@@@ABCB@BAD@D@DCDABCAAACAAAIAG@A@EC@@C@A@EA@@CBA@CBCB@@A@@AA@@A@@A@EB@@A@AB@@@B@@AB@@A@@ACB@@A@G@ABA@C@O@A@A@@AA@A@E@A@A@@AA@@@AAA@A@A@AB@@@@A@@BC@C@A@A@A@CACAC@I@A@G@CCA@IG@@A@CA@AC@AA@@C@K@IAG@A@IAE@MAO@Q@CBIDIHKPGHEFENIRGTADALAL@LCDIPQXABOPMVGF@@ABOJQJWFB@F@D@HAFABBBF@BDD@BB@BBB@DBB@HBBBB@D@BBDFBB@@BBBB@D@BB@HFBDBB@BBBBDDB@BBBBBDBB@H@BBB@@DBB@DABE@A@A@A@AAEBC@CBA@EBCACBEBA@C@@@CBAB@B@B@B@B@B@DA@ABEBAB@BCD@@@F@BCF@D@BDB@@B@B@HADAF@HBFBBB@@BBBB@FBBB@DBB@B@D@BAD@JBBBD@@@F@B@B@DAB@DA@@DCBA@@@@AA@@@A@@BAB@@A@@@ACA@@@ADBDBDBBBJBD@F@D@BGBABA@@BDAB@B@@B@D@@@@@B@@A@C@CB@BA@A@C@AB@B@BB@@B@@AAA@AA@@ABA@AAE@G@AAAAAAAAAACACAGCE@CBADCBAB@@CBABEDELQ@@DEBAFEB@B@BB@BBBDADADCBAD@@@@BAB@BB@D@BABABCBAB@H@F@BABADCDADABADABCBCBE@CB@D@B@BA@EDGFCFAD@BB@BBBABABADAD@D@BBBBADABAD@B@@BAB@DB@@B@D@BCBADAB@BAF@DBB@DAD@DAB@B@BFAFADAHMDIB@DDBB@A@EACBCD@BBB@BCACAAAA@ADAFBDBF@DABA@ABAD@DBDBDBB@DCBAD@@B@D@BCDADB@J@L@D@BDFNDBD@RGDAB@DBDBH@DA@CAA@A@ADAFCDE@E@EDCF@BDBDDH@DAH@B@@@BBB@BABAD@DBBBB@B@BABABABAD@BFAJABAPSFEFCFAFBDBDBBDBBBBFADBB@@DB@B@B@@A@A@C@EDCDGBEFEDCBBD@DBFAH@DBDDB@BBBBBBBBDBD@DA@@DCDAF@@@BHDFBD@BBBBDBBDDDFBDDAD@DAF@DA@AB@DE@ABEGADADE@@D@BC@ADAHBBAHCFCB@B@H@@@BCH@BBDBDBB@@@B@FADA@DCJ@BAF@@ALAFAF@@AL@FAHH@\\@VAB@DAHALCHANCFAJAACCGEK@@AAJCH@HK@@GM@ET@CGTCACCI@AACEUAEK@E@C@G@E@@C@C@A@A@G@E@CAC@@MEAAGA@B@@ELGJABGH@BE@EC"],"encodeOffsets":[[114861,32883]]}},{"type":"Feature","id":"420624","properties":{"name":"南漳县","cp":[111.838905,31.774636],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@SDQBE@S@EBM@ODMBOFEJCFBPBJ@D@@@DABCNAJ@JBHBFCD@BGBC@@@EBEAC@EBABABCB@@C@ADAF@DDB@BDBHHDHDDBDBDADENKRBBDDH@DAHANGBB@@BBB@FDB@@BBB@@BD@BAB@B@B@BAB@B@@AB@B@@AB@DADD@FABA@@BB@@BB@@BBB@B@B@@D@@@BBBDBB@D@D@B@D@@@BBD@@@B@@BBBCBED@DFBD@FCFADCD@BB@DCLGT@BADAB@HBFBDDBF@F@D@@BBB@DAFDJF@F@B@B@LFFBBD@DCDAB@@CDCFAFABEB@BADADCBEAE@GBC@ABBDHPDFBDBD@FADCBAB@BABEDEDCFAF@B@BBDBBBB@D@BAH@DAFCFAFDDHB@@F@HADAFADCDCBAD@@@DFBBB@D@PGD@FFBBD@BABAD@DDDBBBB@DBFAB@B@@DABADA@IBEBC@A@CBG@G@G@CDAFBDBDBDAFAF@B@BBFBDDFFBF@F@D@B@BBDB@D@D@D@FCHBDBFBDDBDDABEDCD@@ADBJ@BDBDDB@BD@B@BCDEFGJ@D@B@HBFCBAD@DBBB@B@D@DABADAD@BBBBDFBBB@BABADCBA@@H@D@HBBD@DADA@CBE@@B@BBBBB@BA@E@ABIHEBEBE@E@@AACAAAAA@EBABCBADABAD@BFJBF@D@DEJCFBDBBD@D@DBH@@HBBVBFCBA@E@@FAFB@@@D@BBBT@BBB@FDDDBB@BCBABID@@CJIFMPILGJCHCFEFGFGHIJGHIHCDEHIFEFEDGDEFIDGDGHIBEBKFGHCDCHAFBH@HDDDFFFHFJFHF@@@H@FBBBBB@L@B@B@BBBBADCDCFEBKFCDHAF@FBDBDDDBHGDCF@F@FBFDBBDFBDFDDFFBDAD@D@DCFAF@D@B@FBFB@BBD@DCDCDADA@CDA@ABCBCDEBCDAB@DDD@F@F@B@F@T@HADAF@BBBDDFB@DBB@B@D@DBDBBBBCFAF@B@@BBB@FAJBFBDBH@FCBABAFADDDDBFBF@F@BDFB@D@DBBD@BABADEDAD@D@DBB@BDBB@BBBBBDBB@B@BB@@BB@BBB@HAJ@JAD@B@D@DBD@D@B@D@F@D@DABAD@D@DAB@BA@AB@BAB@@@D@B@B@B@BAB@B@B@FDB@B@B@D@DAFBB@F@BAB@B@B@HAHCB@BCDE@@DCDCLE\\INAH@D@BANAVERGNCPEB@D@B@BAD@@A@AAAA@@A@ABADEBA@@B@B@D@BBD@B@DABADAFAFAHBHBF@F@H@DBDDDBD@B@FBFDBADAB@JDFBBB@DDDB@JCDADADAFAH@BAB@D@FBD@BABAFCFADABAB@B@BAD@DH@BB@DD@EBABAF@JBD@DADA@EBADABEB@DCBBHFRPFDBBBBD@FBHBFBDAFC@@DCBABABA@ABABA@@@BBBB@B@B@@A@A@AAAE@CEC@AA@@BA@@H@B@BABAD@B@D@F@DABADE@ADAB@BBD@B@BAD@D@B@F@D@D@BBBB@DAD@DDBD@FAB@BEDCBAB@D@DBJDDBBB@@BBDHBBF@BC@E@C@CAC@A@AFCDK@BB@@ABA@@@@@@BA@@AA@@@@BA@@DB@@@@BA@AB@B@BABAB@@@B@B@@ABA@AB@@@@A@@A@A@AA@@@@@@BAB@@AB@BBB@BBB@B@@@BA@@@AA@@A@@BA@AB@@@D@BAJEBA@@BBB@@AB@B@@AB@@@BB@@BA@@@A@@@AB@@@B@@@@A@@BA@@@A@@A@@A@@BA@BB@@@BA@@D@FBBBH@B@@@@@B@@@BCDEBEDC@EBEBCFK@C@A@A@AFCBAAC@EBEBCFIBE@C@EAECEEEAEBA@C@ACAEAEAA@EAOBA@E@CEBCDAF@FEDCFCDADEBC@A@AAA@@CC@@@A@A@@A@A@CBCDEDAB@@C@EBC@G@@@BI@CCA@@EECCAC@CBCBA@AB@BAFQDCDCBAB@DCHGJGBAD@H@DBB@B@@@DE@I@E@EBC@CBCDCDAF@HBD@FCDEBGDIJGDCFAFCB@@APCHCHGBC@GBC@@@ABIDGDE@G@IBIDGJGBEDEHK@IB@BKBCEECAAC@AAA@CJIBCFCDADCB@H@RDD@DABCEO@ECGBG@@ACAGEGAEBCFEHCLGHADCHC@ECGCECEKGEEECEAEDGDE@C@AAGC@@@@C@IEQGIAMEG@A@A@IFCDGDQLGFI@EEGGIGECEEKEI@GACAEECEAAA@@K@GAE@CAAEBCBC@GAGCECECEECEEGCCCGAG@A@CDIBAAEEEACCAAC@@BABADA@ABA@C@CAC@@A@@BABCD@@A@@@@@DE@A@A@AA@E@AAA@CBC@CACAACAA@@@CACC@ECCCAG@C@GA@ACAEAACKCAAC@ABE@A@@AC@KAACK@EBG@C@CCKEK@@CQAA@CACBCJABABA@CAAIC@ABCDC@AEG@C@EAGCK@ABECCECE@C@IBE@@A@C@AB@BCFCDCDCBAB@@AB@BC@C@GCE@A@AAC@CBAFAH@FADEDKDI@G@GCGEGACAECCCCGAE@C@EFEDM@EAIGGCCACCCEEEEKCAAEAACACBGDE@A@ICA@@@A@A@@AAA@E@A@@A@A@A@@F@DABABA@C@A@A@@EBCAAAAA@EFABA@A@@@C@G@CBCBEBGJGJCDEDEDEDE@E@KDCDGB@B@BADCDABAD@BADADEDCFE@CGEECACBEHCNCFCBGCE@A@A@CBEDCHEHCFEFEF@F@DBDHFHDDFBFBDBBDBD@@FEBIBG@A@CF@BDFFDFHDFCJCDA@CBAFADBHBDDH@DMDKEMEOEQ@GAI@KAKCMCIAMAKBI@IDGFIDQJSL@@A@@@@@A@@@@@A@C@CEEGCIKIKKIKGGGCCAICIEOGGGKEQCIEAAOECCEAOGSGM@I@@@@@EB"],"encodeOffsets":[[114181,32055]]}},{"type":"Feature","id":"420607","properties":{"name":"襄州区","cp":[112.211982,32.087127],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DDBBBHBHB@@BB@FBJBB@D@D@LCFAD@BAD@B@B@@DBD@BBFHAHALCDAJCDABABCBCBA@ABA@@DAHCD@@@HCFAFALGFAHAD@B@@@@BCDCDCF@D@FBDFDB@NNFDD@@@F@@@HBDBDBBFBFBD@@BBDBB@D@DAFEFCDAB@D@B@DFB@DBHDD@@@D@F@FBHBDBD@FCBAGIECCACC@CBCFAHEHCHEFCBA@A@ACEEEAAKKEGECCCCAC@CBCBABAB@@A@EACAC@GAA@CCAE@ABCBAB@DABADABABA@C@AAAAC@@AAAC@C@AB@@@BGDAB@LEFADA@CBCCAAADA@AACA@A@A@A@CACAGGAC@EA@ABE@@@AB@@A@@ACA@AAA@C@@@AA@AEDA@BNG@@@A@@@C@@@@@@A@@EB@@AA@@A@@B@@CBA@AB@BA@@B@B@@@@AAAB@@@FA@@@A@@AA@@@@B@@@B@@@CE@@AA@AA@AC@@@DE@AE@A@AAC@AB@H@@E@AA@E@@BEBCCECEAG@GBEBCAACCA@E@A@A@C@A@ABC@@BC@@@AB@@A@C@AB@BAD@VEDA@@B@@A@AAA@A@A@ABA@A@AAEAC@C@GCEAA@A@ABABC@C@@@A@A@AA@C@AA@AAA@C@C@A@C@CAGAE@@AC@ABC@ABABABADAB@BA@@@AAIAG@CACACACA@AAAA@AAA@A@C@AAA@AA@AAECAAE@@AA@@CA@@ABABA@A@@CA@AC@AA@AAABA@AB@BA@@BA@@B@DDB@B@B@F@BAD@DA@@@A@A@CBE@ABAB@B@B@B@D@BAB@B@DBB@@@BAB@@AB@FABAB@@BD@BAD@@ABA@A@@@ACA@AAEBA@ABAB@BAD@BBB@BBBB@DB@D@B@DBB@B@B@D@BAFADAF@JAO_AA]FA@KAA@E@A@A@@A@AAABAAC@C@AAACA@CAEAE@A@E@A@ABA@@D@@CBAB@D@FDD@F@JCFEFCFCJCBEBE@GBCFAFGBCFAJC@@BA@@@ADAHAHEBADADEBC@A@ACECEACAACEEICCAEEI@@CCA@C@I@CACACAACAEAC@ADADABCBA@AAAAAACAC@CAACCGGACAC@G@E@EAC@EAEAE@AACBCBI@AEE@A@@@EAGCEAI@A@ABCBA@C@A@@@@AA@AC@A@A@A@ADA@@@ACCACBC@E@CBCDABCBA@C@E@GAEAE@E@ID@EBC@EAC@EACCAC@IBEBBE@EECG@GBE@AACAEAGAGBGDE@CAE@EBEBE@CACAACACGAAAA@CBEDEDCDCFMHGFA@CBEDKDUFIDGDI@CBCB@D@D@DCDC@EAEBCBADGBEAECEBCHAD@DC@EAA@E@@@CDABCDEAADCBABCDGBEDGFEBE@IFE@EBG@@C@EACAACACCAAC@EDABEA@BCFGHGDE@@BIBM@KBADADCDADABKRILCFIFMDO@AN@B@B@H@B@FDPDH@DDF@@FDDFNHFBJFDBFBJ@L@DBNFDFFFBDBHBDDL@DBD@H@DAD@@CDCFAD@DBFDDDB@DBD@DANAHAF@BELCHADCDEDIH@@ABEB@@A@C@A@@@C@ECC@CAEA@@A@AAGC@@EE@@AGACCCCFCD@@ABCDCDAB@@@BA@ADEDABABAB@@@@AB@B@D@@@B@@@@BBBBBD@@AB@B@B@@@@@@BB@@BBB@@BB@@B@B@DAB@B@D@B@BDB@@@@BBD@F@D@@FABADADFDF@@AHGBAHIFK@@@AHBBBNF@@BD@D@F@H@B@B@D@DF@H@D@F@L@BFFVBD@BDJBDSDDHS@@FHN@@GLG@IDBB@@FLDHBDIBEBMDGBKDGBCBA@UB[@G@BG@EBK@@BEBEBK@@BE@ADI@CCBEBA@@@A@CACAAAG@AD@@G@A@A@EDGDABGACB@BADC@@@CFCBHBAF@BCFA@@BCBE@CBC@CBACCECCAAACAA@AACCEAG@@E@CBCD@@CBC@CAAAAAAAAAA@CCCAG@EBCAC@AACDEFAFCHCD@F@D@B@BA@A@A@@CA@CAEBAAAAACCACAEAEBEDEFOTABIBEB@ABCBABABA@A@AAAAA@CBCBA@AAA@A@@@ABG@CCGACACE@CD@F@FCFEDCB@B@BBB@DCBG@CACAA@CBQHC@CAEMACC@K@I@A@BCDC@A@C@AC@ABCDA@CACACAC@AB@BABCBE@CAEACB@BBBBBBDADA@AAC@ADBD@F@BAACCA@CJGNCBEBEB@A@ABA@CBC@CAA@CBE@ABABCDA@A@C@AA@@CBA@AA@C@ABCBABAA@A@CBCBCBABAAA@AAAC@EBEDCH@FABA@C@A@@DAFADADCBABCBCBCDABABE@G@A@ABADABABC@A@@ABA@A@@C@ABCDCBCBAA@AAAA@A@EFABCF@@KRCFAFAB@DA@ABCDAB@DDFBHBDBDBBBBBBBB@B@HBF@BAB@BB@@BBB@BA@@@AAA@A@@B@D@BABA@@D@D@BA@@@@@C@A@@@@ABAAC@@ABABAHC@E@C@IAAACACACA@B@@DB@B@@@BA@AB@@@B@@BB@@@@ABCD@@CBB@FBB@B@B@@DAJBDBBBDBBBBBBBBBBB@B@D@@BAD@BBBBB@@J@B@B@BBB@BBBBDL@@DB@BBBBB@@@B@D@DAB@B@DDFBDDFBD@DBDDHDDDBDBB@D@B@DB@@@@HAD@B@D@DBB@FDDBBBDBFDDB@DBBB@BBF@DBHADAD@FAHED@F@LBD@B@D@BBBDBB@B@BBF@B@@@BADBBDBB@B@BBB@DB@BBD@BADAD@DBFBFBDDB@@BBDBDHB@@BBD@BA@@@A@A@EA@@@@@@A@@@AA@@AB@@@@@@@AA@A@@@@@@@B@BBB@B@@@@@@BB@@B@@@@BB@@@@BBA@@B@B@@@B@@@B@@@@A@@@A@B@@BB@@@AB@B@B@BA@@@A@A@@AA@@@@AA@@A@@@@@@@@@@@B@@A@@@A@@@A@@A@BB@@@@@@@A@@@A@A@@@@@@@@@@B@@A@C@@@@@@@B@@@B@B@@@@@@@B@BA@@@BB@BB@B@@@B@@@@B@@@BB@@DB@@@@B@D@DBB@D@@BB@RDDBDBBBBBB@@B@@BBB@D@HAF@B@DBFBB@BBBBDDBFBD@B@B@BAD@@@B@@BBDBBBFBFB@@BB@B@B@B@F@BDD@BAD@BADBB@B@@AB@@BBH@D@B@DB@BBD@@BDB@BBDBB@BBDDBBBDFBBBBB@@HHD@BDBBFBB@DBBBBBDDDHB@BBD@B@HDBBDAB@FABAD@DBDBDBB@BA@C@C@@BCBCBCBABA@@@A@A@AAE@A@A@AAAAE@CAC@ABCBABAB@B@DA@AB@BADAF@D@B@B@B@DA@A@E@@ACA@AAAAAA@AAC@ADADCB@D@H@D@@AD@BABADALIHKLEFCHAF@FD@DB@D@BABC@E@@DEBCBABAF@BABABA@ADCBABALEBADAB@B@DBBBBDBB@BBBB@@B@@@@CBABAB@@A@@@@AAAC@EAA@AA@@A@A@@B@B@B@@@@HBBBBB@@A@@DA@@B@B@@BBBBB@@@B@@@@@@@ACAC@ADB@A@@B@@@@BB@@BB@B@@@@BA@A@@@@B@BBBBB@B@BABABA@A@AAA@@DA@CCA@@@A@CBCB@@@@AB@D@@C@@B@@@@@B@@B@B@@@@B@@@@@@BBB@B@@BBB@@B@@@@@B@B@B@@@BABAB@@@B@BBB@@@B@@@AA@AB@B@BBB@BD@@@@BAB@FA@A@A@@@AB@@@B@@@B@@@@BBB@@B@@@@A@@CA@A@E@C@@A@@A@@@ABAB@DBB@B@@A@@@AAA@@@AB@@@B@@ABA@A@@AAA@A@@@A@@@@A@AAA@@@@C@@@@A@A@@@ADBD@B@B@D@BBFBDBD@BBF@B@BB@@LBJBB@DAB@BAD@BAB@DABAB@D@BAB@D@BAB@D@@@@@B@BA@@@A@C@ABABEBAFCB@DAB@DABABAJAD@BABABA@ABA@ABA@A@ABA@@BA@@B@@@B@@@B@@@B@@@@@B@@@@@B@@@BAB@BA@AB@@@@@B@@@@@B@@A@@B@@@@@@A@@@@@@@AB@B@B@B@B@BA@@B@BA@@@@@@BA@@B@B@DAB@BABAD@BABABA@AB@@ABABA@@B@DADA@@@AB@@CBAD@BAD@BADADCB@BA@@@@B@@@@@@@@@B@@@@@BA@@@@@@@@@@B@@@@@@@BB@@@@B@@B@@@@B@@@BABA@@DEBABADAB@B@@@@@BBA@@D@D@F@B@BBD@DBD@BBDDBBDDBBD@BB@BBDBD@B@D@D@DBB@@@B@@@DDBD"],"encodeOffsets":[[115051,33131]]}},{"type":"Feature","id":"420625","properties":{"name":"谷城县","cp":[111.652982,32.263849],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABEDEAAAAAC@C@C@AAA@CEACCAA@ABEBC@G@S@E@A@E@ECC@CBADCFADCDABAB@DCB@BCDCDC@CAC@AEAEAA@C@E@EBCDC@C@CBEACEECACCEAAECEAE@E@CDGHCACCCAEAE@GBABCDEFCDEDC@EDKFEHGJEF@@ABCD@@A@@BA@A@A@AAIAGCCBE@EBCHKFYDMBMDKFE@KBKDBH@HAP@BAB@BCJ@@INGLEJGJIJIHILCH@BBF@@@B@B@B@@@@ITEJ@BGFIDKBE@E@M@[F[AMAYGA@M@A@QAGAI@YAQBOFKJCFAD@D@DCBKBCBABEHCFABAF@@AB@DCD@BGFA@AB@@AB@@@@AB@D@BBB@B@@AB@B@B@@DBD@DB@@BB@BADAB@BEDABADABAD@BBFAFAF@DCF@B@B@B@BBB@B@BAD@B@BBBDDDDFF@@@DB@@BDBDBFBBBD@B@D@B@FAHEBAXF\\NLHTJHFLFNJFFDFBBDHPNFL@BBDBBBDHNFHDHDFLXF^ABAH@@ABCFAB@BADADABCBCBIBABAB@BAD@D@F@F@D@D@FBF@DFF@BBBAB@BE@A@CBC@AACAAAAAA@A@A@@@C@ADABEDCBA@C@ABABABBB@BLHDFFDFDDBHFBBDDDFBB@BABEDCBA@@D@B@B@BB@BBBB@DFTRNTRXNTHD@PDVBPFLHJRBJBHFFLNHHJB@@@@DBPBVJPJLD@@DBJHFLFJGHBDHFLANIJGLGDGP@D@NFVRLFTDTBLHNLJJHHFD@B@BCFCD@@@B@B@F@@ADABCBEDA@@D@B@BB@B@F@D@@AB@BBB@DFDDBBBBBBD@DABADAB@@@D@@BDDDD@BBBBB@B@BBDBD@@BBB@D@B@@DBBDAHBJHDBNMNKDALCHCPEDAHCFAFADADADAXIHAB@FAFAB@LCFA@@NENIHCDC@@JGJKDCB@FEJIFEB@DCBADCHEDEFEDIBC@E@GCGAAAAAC@@AAAC@@AAAAAA@A@@CAEEAAAAKG@@CACC@@@@AAA@CEGECCCEACAE@@AGCG@IBKBGHKFCJINEB@HETGFCNCFAFCLENQDCFGBA@CBCDIDEJKBKBCAQAGAMAM@KAE@EAG@@@@@A@ECKFKDELMNMB@LKRCHAXERIPIBA@@HENUPOBARWJODC@KBKBKBCHSJQFMFEHGLOJGJCDAR@P@NBF@JBB@DE@A@@AC@A@AAA@CBA@CBA@C@CAA@@AAACC@EAA@AAEEE@E@IAAB@@ADAF@F@BA@@BA@CBA@C@EBAA@@@A@A@@DE@@BCAAAA@AA@AC@A@A@AAA@AAEAE@@AC@@@A@ABABA@CDABCBAB@AC@AC@@A@@AAA@@ACBCAA@@BABABA@A@AA@@@@AEAABEBEBABAD@HBH@BADAF@JC@AA@@A@AB@DAB@@ABAD@B@@EBEAC@CAACAGAG@AAAA@ACCA@@ACGC@ABA@A@ABCBEBEDABABC@EAC@A@ABG@EBCBCBCBIDA@CC@CAAEAICA@CBABECEAA@C@CACCCAG@E@E@GAGAEBEBCBABCBA@C@AAC@A@A@@@ABCFAB@B@BB@BB@B@BC@ABA@C@A@OFMDQHUFMBABC@G@MB[JKFCDCD@@CFADA@GDGBA@A@A@ABE@A@EACBC@A@A@A@ECA@A@A@ABA@A@A@C@@@A@ABA@@BABA@CBC@C@ABCBC@E@C@A@C@C@CAC@A@C@IBI@GBA@AAA@@AA@@A@AAAACAAAAA@CA@AAA@C@CBCFCBCBA@AACCAC@A@CE@A@EAEAECCCCEBABABEDG@CAEAIAEBA@AA@@"],"encodeOffsets":[[114185,32736]]}},{"type":"Feature","id":"420626","properties":{"name":"保康县","cp":[111.261308,31.87831],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@@E@C@@KA@LL@"],["@@BB@D@@BBBBBAD@BAFEFC@A@@BAA@AACACAA@AAECEEA@AAC@ABA@ABA@@B@B@@BDDFBBFDBD"],["@@ABAD@BC@ABEDEB@BAB@B@@@@@@BBBA@@BAB@B@B@D@H@D@@@F@B@BB@@BBB@@@BABA@A@A@A@AAA@AA@A@AA@A@C@C@C@A@A@E@A@@@AA@A@A@A@@@AB@DAB@BBD@@ABAB@@@D"],["@@CCC@G@IAC@EBCBCBIBCBCBGBEBGBCFEFA@ABC@ABAD@BAB@B@DBDBD@B@DABA@G@C@CBCBCDABC@MBI@E@EAIBCBEFIR@JBH@DCBCFAHBDBBJDDBFLBLBFAHCHADCDEDEFIBMDSFMFEBKBI@EAC@ECAAAAACCCAGAEEKCEEAC@C@CBABADCBCBCDEBCA@CAACAC@ABAFCF@BCBCBA@A@CCCCEGACAACAEAGCECAAA@CBCAA@ABA@CDABCBE@C@AACAAACCGECAACACCGAA@EAEAACAA@C@IHC@E@C@C@CB@@@BBDDD@BBBAFCFCBABEDA@GJCDA@C@C@EEGAE@CBGDE@AB@@CBADA@EFIPAFAF@DDL@P@JDHLPHHNHFF@DAD@@CBCBAFAF@P@BCD@@KDCBCDIHED@B@DDBJFHFBD@F@DAJAJABEBC@KAEAGBE@IAM@I@ABABCDCBA@EAA@EACAC@QFIBKAICKAO@C@CB@B@D@DAPABEJAJ@D@BDLHHDFPTDFDHDFDF@BDFBDBBBFF@D@D@DBB@BBB@@@BB@BABCFAFABC@EDC@EBCBA@IJAB@@C@G@@BA@ABCDABABA@EBAAA@AAC@CCAACAE@C@CAA@IAMAE@A@CBAFAD@D@DCBIBCBABCBCBAB@@AD@@@B@BADABAFAD@BA@@BABAB@BABAB@BCD@BAD@D@B@DADAB@B@@BB@B@@@B@B@@@B@@A@@@A@@DA@A@@@AB@@A@@B@BAD@@BB@B@@D@BB@B@@@B@@@B@BBB@BABBBAB@@@B@BADCDAB@DCHILIJMP@BCD@BGJMPIHGBK@MAO@IFGHADEDCFMREHOLADAB@D@FADAFADEBCBCBED@F@BBDFDFBD@N@B@DBBDDD@BCPCF@F@BFBH@H@F@FCD@@AFGDCBCBAB@BBDBDBD@BBDAD@HCB@D@BBD@B@B@DCBAB@B@LBB@@AB@DCBAB@B@J@F@NDL@DBB@BB@@@B@BGHCF@DBDBBB@BABADADE@@D@D@BB@B@BABABGDADAB@@BBBBFDJBH@F@D@BABABCBCDCBAFCFCFAJAFADA@D@D@BCD@B@DDBH@PFFBFDHDB@B@B@BAHGBALAB@BA@C@IBCBCBADCDAFADABCDA@CBCF@DBBDDDHHHDFDDDBBBDB@DBB@BABADEBA@A@A@A@A@E@CACAAA@GCC@@A@@@A@@DC@@BA@ACI@CBGFEDEB@B@DBBBBBJBFB@@FDBBB@BB@B@BABC@AB@B@@FDD@D@B@BBBD@D@D@DADADCBABCDADCD@FBH@Z@BCDAB@BAD@BA@A@EBAB@@A@@CA@@@A@CF@F@DABA@@B@@@BB@@@B@B@FHDDLHDDCDCH@BE@CBABA@AB@@@@BBBD@BBH@D@DDL@FBBB@D@BBDD@BADAFCDABAD@DABBDABAJAB@B@@B@D@DAD@B@BBBB@B@BA@EDA@AD@H@BA@EFCBABABAB@@C@ABEDCB@BBDFJB@BBBB@@B@D@D@@@BB@@@BABAD@D@HB@BBD@DBHDB@FBN@JAH@DB@@JAJGBC@ADC@@BG@@BE@ODIBCNMDG@ADS@A@ABBDHBBDBD@B@BADCBABADA@AHGFKBAHEBCB@B@B@B@DBFDDDB@@B@DABCDERCBABABE@KF@@ADAB@D@BBJB@BBD@@B@B@@@BA@ADAHABCFC@C@CBABA@A@EEAAAC@C@AAAC@AA@A@A@A@AA@@@A@@BABCBABC@@B@B@@BBBB@BABEAAB@@B@DD@@@B@@@BAF@BBF@DB@BDFFDBD@FCB@BBBD@FBFD@F@BB@DBHBDABIAGFCB@DBD@RBFDBHDFJBD@DBHBB@FABADEBK@KAKEECC@@@@FDNFLFNHHJBDDHJBBB@BCBGHCFADE@@FBBBDDBBDDHFDDD@DBJBDBDDDJBBD@DAD@BA@ABC@A@AAA@A@A@A@ADE@CBEBEAE@ABCBABCBAFC@ABABC@AAA@@CAC@CA@@@A@ABA@@@AAA@A@CBA@@@@BA@@BAB@HE@ADC@CBACBC@C@A@AAACAAAC@A@@AAAAEA@@C@A@A@A@ABABCFABCDEHA@A@AA@@@@CCAECECA@AAA@AAA@@@@AA@A@@@A@E@@@C@A@@CGME@@CAACACAEBKAAGA@@@ABCBAB@F@DB@@DBFAFBDHBDAFBBB@FAF@FBVP@BGJ@BDB@BD@FBF@@@D@DBF@L@B@B@D@DBBBBDB@BBBADALADA@C@CBCDELIPERAZBJ@HBRBB@N@B@ZHNB\\B\\EN@F@F@LAJCHE@AFIJS@@@@@A@A@A@@AE@ADGJKJGJIHIFIHKJM@@DI@ABA@ABO@GAGLCLAF@LENCNAZCLEDGFAF@DAHDJBBBB@B@B@@AB@@@DCBA@@FEHIFGLEFCD@FCDCFEDCBADCLEFADEDCBCAAAAA@A@K@A@AAAA@E@G@@GEIEGEEECECC@GAGBEDGDCHGLEFAJAHGHCJCFEHCFCFEJEFGDCJGHGJIHGHEFEDEDGHIJKNOJEDI@@JCBADA@AAACCECA@AAS@AA@A@C@@EAEB@@@FABEDUAAA@GG@CAC@C@AAACDEFI@C@CAEEI@ABCBABCDABAFAB@BBBBBD@BF@F@FAFAJGBAF@B@@AAAAA@A@AF@DAB@BC@CACGAC@G@@@ABCDABABA@AACEAAAAC@CBABCBC@A@A@AA@CBCDAAE@G@A@CHIFEDC@A@AACA@CCCA@AAIBC@@DCFCBACCCAACAEACDG@E@C@C@CCAAAA@C@E@E@EACEACAE@A@ABEBEACACACBEDCH@H@H@DAB@D@FAJAB@BCBA@CA@A@EBCAA@AACACCC@ABABC@AAEEC@OHC@A@AACE@@C@ABCDCDEBCBGBE@@@GACCBEDEBE@CBG@A@CAAAAAC@A@ABEDEFCFCBA@ABADABC@EACACCEGOACBAD@HAF@FBDABCBC@AFABABEDEDC@@BADC@CACEAKEA@A@E@E@CIBE@CAA@AC@E@E@CAACAE@GBABC@AHSDK@CAAC@CDEBEDC@EA@CFCDAAA@AA@@@C@AA@@C@A@C@C@A@CAAA@A@@@CA@A@A@AA@@AA@@AA@@ABEBC@BC@CBA@@@ABA@@@ABA@A@A@ABA@AAC@@AA@AA@ECA@AA@@AAMHGBCBG@CCAALQFMBCACACCCCGGGCA@ACA@CBEBCCCACECCAA@C@ICCAC@CBA@KAGAIGKI"]],"encodeOffsets":[[[114855,32652]],[[113713,32189]],[[113650,32698]],[[114039,32103]]]}},{"type":"Feature","id":"420682","properties":{"name":"老河口市","cp":[111.683861,32.359068],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CAAAA@@AACEAAC@A@AAGAA@CAA@AAA@@ACC@AAEAAEBGBC@E@A@GBQDKLA@MNKNCFELDL@F@B@@@@BH@FBF@LBNBNBHBRADALILCFCJAD@DABEHCDMRKFEDEBMDEDSHGFA@MFIJEDGLAHAL@JDHBH@@BFBDDFDDHFDFB@BB@@@@DDDB@@LHBBBBFFDB@@@BBBBBBB@@BDBB@@BDBBBBDH@H@FADCJEFCFGFCDABCDA@EFIJEFA@CDILIH@@CDGDMJMF@@EBKDA@EBEBA@GBWJCBCBCBEBEBGDCBOFGDKDCBMLNRF`BDFHDDFF@BBDBBDFB@@DB@@BAD@FBBHHFFFDNPJNDFDHFL@T@B@FCJHFDDPHNJFHHHPTDBNFNHNADM@@@ACQBKHKRFHLJHNDJCXGJCD@PGFCR@HAHCDAPMRKFKDCFINIFEJCJERCLG@@FCDAFE\\SPEDAFCHAFCFAT@N@NBJBPGDE@ABCHIHQRKRERBB@`FNFFDNFTDN@B@BADA@ABADAB@BA@EBA@ABAB@BABE@ABCHG@CBA@ABEBE@CBABAB@BA@C@IBA@@DAJAB@PCDA@@@A@@@AAA@@CAAAA@@A@@@A@@@@B@B@@@AA@@@@DA@@@AHBB@DBB@D@B@B@BABCBC@CB@BC@@B@@BB@B@DAD@ACAACCAAA@CAAAA@AC@@AC@ACAA@C@G@AA@@BA@@@AAABC@ABC@ACC@A@E@A@A@AAA@@EAEAAACAAA@@@A@@BC@A@A@AACAECCAAAAA@EACAA@E@GBC@A@AA@@@AA@AAAACACAQCA@@AC@A@CAC@A@@@@@CA@@AA@@A@@@@@@A@@@AAAA@@A@@ABA@@@@@@@A@A@@@A@@@@@@@D@B@@@@A@@@@@@@@B@B@@@B@@@@@@@A@@A@BB@@@B@@@B@@@@A@@@@@@@@@@@BB@@B@@B@@BB@B@@@B@@A@A@ABA@@A@@AA@B@@@B@@@@@@A@@@A@@@A@AB@AA@@@@AA@@@@@AA@@A@@@@A@A@AAA@@@@@@@B@B@@B@@@@@@BA@@BB@@B@@@@@@@FBB@B@@@B@@AAC@AA@CGCAAA@@CAACAEAE@CBCBC@AAC@ACAA@AAA@A@CAAABC@A@@@AAE@A@AAAACAAC@A@C@KAE@C@GFEBC@CBGBCAE@AAA@AA@CCAECCAAACAECA@CAC@A@C@GB@@@@CAA@C@A@CACACCCGAC@CACCEACCE@C@ABA@C@C@A@@AAAA@ACA@@CKAAAAA@AAA@A@I@@@AAAA@ABC@AC@A@A@AAAAAAAAAAACAAACBI@CA@A@A@EAA@A@CBA@A@E@@@C@AAIAC@ABC@A@A@CAA@AA@EAAAA@@AAEAGAE@CBGBA@A@@@CA@A@CDE@A@E@@DC@ABAFABAB@@C@A@A@A@A@ABADA@@D@B@FADADBFAB@DAD@FABBB@B@B@F@BA@CAA@CA@AAG@A@CAAAAA@ACAACAA@AAAACGEA@@A"],"encodeOffsets":[[114456,32966]]}},{"type":"Feature","id":"420683","properties":{"name":"枣阳市","cp":[112.771959,32.128818],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@JB@ECAA@CF"],["@@CKAI@I@A@E@EAIAGBIBCBCBKBK@EAG@AAECGEHEHGJGJIHGAEBI@IAE@@D@D@DBHAJKLABGFIHEDEAAGBG@ECGCGIAIAEBEBGBEFEHGNGHILCFAH@HDN@H@DGFEDEBEFIFEFAHAD@DBBFD@@@BHB@@A@BFB@@BBA@CB@BAB@B@FAB@B@BBC@A@ABGB@B@D@BBBD@@@BA@@@@B@@BBBB@@ABADBBAB@@@BF@B@BBBB@B@B@B@@@BA@A@ABA@A@C@AD@BA@ABA@BABADAB@BDABBB@@@@D@@@@AAC@A@ADAD@B@BB@B@@@B@DD@@BB@BA@BBBBB@BABB@@C@@@@B@BBBBBBBD@D@@@B@A@ABC@E@AA@A@AA@AAAC@AA@A@@@@AB@CE@@CBADBBBD@@@@AA@@A@@@ACBC@CCAA@A@@BA@@BB@@BA@AABC@ACAAAAA@@@DBH@DBJAD@BBD@@B@@BBB@BAB@FCN@DDHBB@BABA@A@A@GGEAC@A@@B@@@BDBBB@@@F@FAB@@AD@B@BADBD@BABAB@@@B@FAHAJGLGHKHOJIFGDKFEFEHGDK@E@EACAC@IBA@CA@@A@AB@BAD@D@@@BA@A@CDA@A@KAABC@C@EBA@A@AAA@C@A@@DABAD@B@BBJDFBH@F@@@BFF@BAJADBD@BBFBF@FBD@F@F@HBDBDHHDDBB@DBDBDBBBB@BABADCBCB@BBDBFBDDBDBDBJ@D@B@DD@@FJBFDDFJDFBBBDDFDF@B@BADCFCBABGFGBCB@B@@AB@@IDEBADEHEBAD@HAFAFIDEDEDEFIDE@C@ECC@A@AB@DC@@@AB@B@B@F@BBFBF@DDBBB@B@DBDABBB@B@BB@B@F@B@LBB@^EBBP`IBE@CBEBABC@A@A@A@CAA@C@A@@CAAAAA@AAC@ABA@AB@BABBF@BDB@B@@@BAB@BC@ABC@@AA@ABEBA@@BA@AB@@A@CAA@A@ABC@A@A@A@A@AB@BAF@D@B@B@@CBC@ABE@A@A@A@CCA@@@AB@@ABA@@BABBB@BBBD@@BDB@@@BABAB@BB@@DB@@BF@BBFDBBB@@BBB@B@D@BBB@BBBBBB@BDBDBD@DBHBJ@B@@ABA@CBABABAB@BAD@BBD@@BFBH@D@D@B@D@DBB@BBBD@B@@B@B@B@@@DADAB@B@BBBDF@H@DBDBF@B@BAB@B@B@BBB@B@BA@@@CBUFC@ABA@@B@D@BA@@B@@AD@@AD@B@B@D@B@B@FDBBDDBFAHAH@FBFDDDFA@AF@B@@B@FG@A@@BBD@B@BBFF@@C@@BDB@@BBB@@DF@@A@@@A@@@@@BB@@@B@@EB@@A@BB@B@@A@A@@@ABA@@BAB@DA@@@@BB@@BA@@FB@@@@@@@@D@@@B@@MH@ACBBFB@@B@@@DBB@BDB@BB@@@BA@@F@BAB@@FBDHHDBDBB@B@B@B@BD@BCBBBDBAD@DCBEBKFA@CBAH@@A@@B@DBDBB@@BDBB@B@DABABCBABCBA@ABAD@BBFDDB@HBD@DBFBB@@@BABADADAD@DBDDFDFHLLBBFFDF@B@BABEDGFGDGFEBAD@DDDDBFDHJFCBAB@@@LJDDDHFHBD@DABABAB@BBDDDB@B@B@DANGDA@ABBFB@@DCNEBABCDAB@D@D@LATAJAT@D@PGBATCHEJGLIB@LCDBN@V@B@HAFABC@EBAJC@@FAH@HAHEH@LAF@@BFJFHPFDBDEKACABCBCDAJ@D@@BBB@BED@DDBDK@CAGBALCHEFCD@HAFAD@H@JDFDDDAFFJBDJAHHNJDBVLVFLD^HPJFBJHTJNBFBLADGA[BCBCD@PBNLBBLLJBHBXAD@DA@@^AH@D@N@LEJOJKLCB@NDHBHL@L@BADAL@BAF@FLVLLXBHBD@BBHDBDBBBBB@B@B@DAFC@@DAPAH@FELM@CFGLE\\OF@LFVDH@L@BCFIFWHICGEEEGC@A@sJYEKGEC@ABKDSDCDGLGLEXS@IBEEQIKMQACQOWGGAG@O@QAGEEKHWJUDQ@U@QBQAOGO@AEMAACUAY@SHMNKJGPKBU@E@A@AEGICOSSSGI@@QS@AIGGEOKIM@U@ABA@G@E@A@CB@@KA]@I@A@@@GBG@O@K@CLCL@NA@@NAFCNEJCDG@@BG@AAGECE@IACDI@EBCC@ACG@CAGAACBEDCCAE@IAI@@@IAG@GCECICECCCEGAGCCBG@CAE@EACCCECEBG@IFIDKDIDIHEDGDGBGEGCEGIGCECE@CBGBCBCBGJCDEBE@G@EBMIGICEEEGGKGGEAKGIGIECKACDGHGDMDMAGCGEEKIOGMGMISEGACACICKAG@I@I@IAGE@@EECG@CCAECGBOHGFSDGBI@CCCC@IDK@EBCBG@KAECGEEECIEGE"]],"encodeOffsets":[[[115435,33143]],[[115440,32463]]]}},{"type":"Feature","id":"420684","properties":{"name":"宜城市","cp":[112.257788,31.719806],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EC@ABEBC@ACEGABCACCCCCAAEBCDCDIHEFCBIBE@C@AAEMAACAEBC@CBA@ABCFCDGDGHEBGDC@C@E@CACCGECCAAC@C@ABABEBA@@@A@CACC@AA@C@M@E@AA@H@DBHDDFDD@BD@D@@BBBDDBDBD@DAB@BBF@B@@B@B@BCF@@@@B@@@DCBA@AB@@@BD@D@DAB@BCBABAB@@BDDBBDFFBFABCJ@D@BBHDHDDFHDFFFFDFDHDHBD@DAFABB@DBF@H@LB@BBDFFFDBHBJ@LFFFFDJHHHFFJ@HERKHCDCJEB@B@H@NFJBRHJFD@@@@@HDBBD@F@HCFCFBFDFFLHDFDFDH@FGDCDGBKHGDEFADBFFHBHBD@@AHDH@FFPADCBC@QCG@A@CDCBEDADIJ@DBB@BBDDBFFADALA@@JGLCFAFIHCHAJ@J@HCFCHAJ@B@@AD@HADGHGDOD@BA@EDEBCDIHCJAHCFEDC@GAE@CBCDAD@DAD@F@F@JCF@@A@A@CAG@C@ABIHGHCDA@ABCDCDERABA@@BABAD@DBDDDFF@@DB@DBADC@GBCDCDEDABAD@F@D@D@HGDCHCHBD@BCHBL@DBDAFAB@B@HBJ@D@F@DABCHCJAD@F@HBDDHJDDHFDFFDFDFBB@BBJBFBX@DBBD@@AFDFDFFBBBDB@@HDLFBFBDDDBDBLDBFD@@FBVDF@F@BBNLDFFNFFHHPPDHDFBLDH@HFBBAFCD@BBDDDBBBBD@F@DH@FAF@JEF@FAHEFCHADCBADABCFBDCBADC@@F@B@FBD@@CBCDGFAFDFBHABCDAFAFBD@DC@C@C@CDADAJ@HCJCVELCFCDAB@HENGDEDCFCFCDAB@BBHBBDBDDBDBF@FAFAF@DBF@HCHAHBFBDBBBF@HAH@FD@FAFFAJAD@DBBD@FBD@FAD@FJCF@F@FBHBF@D@B@DABADCDAF@D@DADBBD@@B@BCB@B@B@D@@BBB@@@@@BB@D@B@BBB@B@FAD@D@BALBB@B@DCB@B@@A@@@CBC@ABAB@@@DBB@JAD@DBFBF@L@HCFGFELEHCJEPILGHGHKBIBG@E@A@@BABA@AACBC@A@ABC@@BA@E@E@@AACA@A@@@AB@D@FBHHB@B@B@BA@AAACG@CDM@EBA@AAA@AA@@@AC@ABCAI@CAG@C@@BBBBDB@BADBBB@@AA@@AB@@AB@B@DB@DADBD@@B@@@BB@@@@ACAABCDA@@DFA@@B@@B@B@@BBDBBB@@B@BBBF@D@BAB@A@@@C@C@AAAAAA@A@A@@D@@@AAABA@AAAAB@@AAA@@CCA@@@A@A@@A@ABCBCB@D@BB@@@@@C@@A@AACB@ABABCBA@AAB@BABC@@B@D@BAB@B@BAB@@A@A@A@A@AA@A@AAE@@A@ABCAAB@BA@AA@AA@@@@@AB@@C@AA@A@C@AHABAB@D@AAA@A@EBA@A@ABA@@DAB@AA@AEB@@@GA@A@@ECAA@CBCBGFEJEFEFAFCHE@C@GCM@GBGDEJKHGHMFGFEHAFAFAJBJBDHDH@FAHBHFBFCJGHEBALKBIAG@C@C@CF@JBJ@FAHBJGHIHIFGFGBKBGDIHGJAFEHAFC@IEM@IAKCOAK@IBECICECCC@E@KBI@K@GAGCEAGGAEAE@ADIFCHKFKBCFI@ABCDCFEBG@MAICGCEAMCCCEC@GB@BKFA@ABGHEDCDIJMDEBGBKBIFGBGHEBG@EAGCCEE@G@GFILEHGFGHQTIPEJIDEDEDGDIDGFGFEDGBGBW@OCEAGAIAKDE@GBE@A@GCEEGEECEAGKEEGGEEGAE@KASGUIIGGEGKKGKEICA@G@IB@@C@KBQDEBGDSJUFIBEAEAIAEAC@IHOJKJMDK@G@SFILMJGDGDECGCIAK@IAOCICGEGECECEE@G@MDKFKDEAEECGCGEEEGAGAKDKBOAK@MAQGBIJGBMFS@IACAGCEECA@AAECAAAGEABGAK@CAC@ABC@C@EBC@EBEAIGGCC@EAAAG@CDA@E@A@EAEBEA@@ACBC@A"],"encodeOffsets":[[114764,32207]]}}],"UTF8Encoding":true});}));