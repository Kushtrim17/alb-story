import { VoiceArtifact } from "../../../entities/VoiceArtifact/VoiceArtifact";
import { Albania } from "../../countries/Albania/albania";
import { CentralAlbaniaArea, NorthernAlbaniaArea, SouthernAlbaniaArea } from "../../countries/Albania/Areas/SouthernAlbaniaArea";
import { Berat } from "../../countries/Albania/Cities/Berat";
import { Delvina } from "../../countries/Albania/Cities/Delvina";
import { Elbasan } from "../../countries/Albania/Cities/Elbasan";
import { Gjirokastra } from "../../countries/Albania/Cities/Gjirokastra";
import { Kavaja } from "../../countries/Albania/Cities/Kavaja";
import { Kolonja } from "../../countries/Albania/Cities/Kolonja";
import { Konsipol } from "../../countries/Albania/Cities/Konsipol";
import { Korça } from "../../countries/Albania/Cities/Korça";
import { Kruja } from "../../countries/Albania/Cities/Kruja";
import { Ksamil } from "../../countries/Albania/Cities/Ksamil";
import { Laç } from "../../countries/Albania/Cities/Laç";
import { Leskovik } from "../../countries/Albania/Cities/Leskovik";
import { Librazhd } from "../../countries/Albania/Cities/Librazhd";
import { Mat } from "../../countries/Albania/Cities/Mat";
import { Pogradec } from "../../countries/Albania/Cities/Pogradec";
import { Përmet } from "../../countries/Albania/Cities/Përmet";
import { Saranda } from "../../countries/Albania/Cities/Saranda";
import { Skrapar } from "../../countries/Albania/Cities/Skrapar";
import { Tepelena } from "../../countries/Albania/Cities/Tepelena";
import { Tirana } from "../../countries/Albania/Cities/Tirana";
import { Vlora } from "../../countries/Albania/Cities/Vlora";
import { Çorovoda } from "../../countries/Albania/Cities/Çorovoda";
import { Amantia } from "../../countries/Albania/Villages/Amantia";
import { Arrëza } from "../../countries/Albania/Villages/Arrëza";
import { Barkanesh } from "../../countries/Albania/Villages/Barkanesh";
import { Blaca } from "../../countries/Albania/Villages/Blaca";
import { Borova } from "../../countries/Albania/Villages/Borova";
import { Bovilla } from "../../countries/Albania/Villages/Bovilla";
import { Burgajet } from "../../countries/Albania/Villages/Burgajet";
import { Gjyras } from "../../countries/Albania/Villages/Gjyras";
import { Gracen } from "../../countries/Albania/Villages/Gracen";
import { Herraj } from "../../countries/Albania/Villages/Herraj";
import { Hudenisht } from "../../countries/Albania/Villages/Hudenisht";
import { Kanina } from "../../countries/Albania/Villages/Kanina";
import { Kapinova } from "../../countries/Albania/Villages/Kapinova";
import { Leshnja } from "../../countries/Albania/Villages/Leshnja";
import { Libohova } from "../../countries/Albania/Villages/Libohova";
import { Maliq } from "../../countries/Albania/Villages/Maliq";
import { Remanica } from "../../countries/Albania/Villages/Remanica";
import { Rukaj } from "../../countries/Albania/Villages/Rukaj";
import { Rusan } from "../../countries/Albania/Villages/Rusan";
import { Shesh } from "../../countries/Albania/Villages/Shesh";
import { Suka } from "../../countries/Albania/Villages/Suka";
import { Voskop } from "../../countries/Albania/Villages/Voskop";
import { Xarra } from "../../countries/Albania/Villages/Xarra";
import { Zenisht } from "../../countries/Albania/Villages/Zenisht";
import { Zhulat } from "../../countries/Albania/Villages/Zhulat";
import { SouthernGhegSubDialectCentralVariant, SouthernGhegSubDialectSouthernVariant } from "../../languages/Albanian/dialects/GhegDialect";
import {
  NorthernToskSubDialectEasternVariant,
  NorthernToskSubDialectWesternVariant,
  SouthernToskSubDialect,
  SouthernToskSubDialectChamVariant,
  SouthernToskSubDialectLabVariant,
} from "../../languages/Albanian/dialects/ToskDialect";
import { TransitionalDialect } from "../../languages/Albanian/dialects/TransitionalDialect";

export const albanianVoices: VoiceArtifact[] = [
  {
    id: 39,
    subDialect: SouthernToskSubDialect,
    variant: SouthernToskSubDialectLabVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Ksamil,
    speakerName: "Idriz Kreka",
    speakerDescription: "Born in 1984 in Lekas (Korça) but resident from an early age in Ksamil (Saranda), shepherd",
    subject: "On his work as a shepherd",
    // recorderdOn: new Date("27 April 2008"),
    recorderdOn: "2008-04-27",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 75,
    coordinates: [39.75, 20.0],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD039_ALSR_Ksamil01.mp3",
  },
  {
    id: 40,
    subDialect: SouthernToskSubDialect,
    variant: SouthernToskSubDialectLabVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Konsipol,
    speakerName: "Anonymous male",
    speakerDescription: "Born in Konsipol in 1947, shepherd",
    subject: "On the village of Xarra and his life there",
    // recorderdOn: new Date("27 April 2008"),
    recorderdOn: "2008-04-27",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 76,
    coordinates: [39.733333, 20.016667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD040_ALSR_Shkalla01.mp3",
  },
  {
    id: 41,
    subDialect: SouthernToskSubDialect,
    variant: SouthernToskSubDialectChamVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Konsipol,
    speakerName: "Izet Izeti",
    speakerDescription: "Born in Konispol in 1932, shopkeeper",
    subject: "Remarks on the dialect of Chameria",
    // recorderdOn: new Date("27 April 2008"),
    recorderdOn: "2008-04-27",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 176,
    coordinates: [39.65, 20.166667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD041_ALSR_Konispol01.mp3",
  },
  {
    id: 43,
    variant: SouthernToskSubDialectChamVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Saranda,
    village: Xarra,
    speakerName: "Hisni Xhemali",
    speakerDescription: "Guard at Butrint archaeological site",
    subject: "On the village of Xarra and his life there",
    // recorderdOn: new Date("27 April 2008"),
    recorderdOn: "2008-04-27",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 57,
    coordinates: [39.716667, 20.05],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD043_ALSR_Xarra01.mp3",
  },
  {
    id: 44,
    variant: SouthernToskSubDialectLabVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Delvina,
    speakerName: "Xhelal Huta",
    speakerDescription: "Street vendor",
    subject: "On Delvina and its local economy.",
    // recorderdOn: new Date("28 April 2008"),
    recorderdOn: "2008-04-28",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 51,
    coordinates: [39.933333, 20.1],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD044_ALDL_Delvina01.mp3",
  },
  {
    id: 45,
    variant: SouthernToskSubDialectLabVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Delvina,
    village: Rusan,
    speakerName: "Besnike Murto",
    speakerDescription: "Female keeper of the Mosque of Gjin Aleksi",
    subject: "On the Mosque of Gjin Aleksi and her Islamic faith.",
    // recorderdOn: new Date("28 April 2008"),
    recorderdOn: "2008-04-28",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 254,
    coordinates: [39.95, 20.066667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD045_ALDL_Rusan01.mp3",
  },
  {
    id: 184,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Gjirokastra,
    village: Libohova,
    speakerName: "Merkur Tosuni",
    speakerDescription: "Born in 1962. His life and work as a sage herb merchant in Libohova.",
    subject: "On the Mosque of Gjin Aleksi and her Islamic faith.",
    // recorderdOn: new Date("23 October 2012"),
    recorderdOn: "20212-10-23",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 463,
    // 40.016667, 20.250000
    coordinates: [40.016667, 20.250001],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD184_ALGJ_Libohova01.mp3",
  },
  {
    id: 54,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Gjirokastra,
    speakerName: "Baba Rexhebi",
    speakerDescription: "(1901-1995). Born in 1962. His life and work as a sage herb merchant in Libohova.",
    subject:
      "On his Bektashi faith and the creation ofa Bektashi tekke in the United States. Recordedin Washington DC by the Voice of America. With the kind assistance of Frances Trix",
    // recorderdOn: new Date("23 October 2012"),
    // recorderdOn: new Date("23 October 2012"),
    recorderdOn: "20212-10-23",
    recordedBy: ["Voice of America", "Frances Trix"],
    duration: 116,
    // 40.066667, 20.133333
    coordinates: [40.066667, 20.133333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD054_ALGJ_Gjirokastra01.mp3",
  },
  {
    id: 183,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Gjirokastra,
    village: Zhulat,
    speakerName: "Bukurie Aliko",
    speakerDescription: "Born in 1918. Born in 1962. His life and work as a sage herb merchant in Libohova.",
    subject: "On the village of Zhulat, past and present.",
    // date is actually not recorded it is earlier than 1995
    // recorderdOn: new Date("23 October 2012"),
    recorderdOn: "20212-10-23",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 196,
    // 40.116667, 19.983333
    coordinates: [40.116667, 19.983333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD183_ALGJ_Zhulat01.mp3",
  },
  {
    id: 207,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Leskovik,
    speakerName: "Vasil Jorgji",
    speakerDescription: "Vasil Jorgji, born in 1962, born and raised in Leskovik, but with parents from Souli (now in Greece).",
    subject: "Local history, tekkes and Vlachs.",
    recorderdOn: "20217-03-20",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 175,
    // 40.133333, 20.600000
    coordinates: [40.133333, 20.6],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD207_ALPR_Leskovik02.mp3",
  },
  {
    id: 153,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Leskovik,
    speakerName: "Vasil Ngjele",
    speakerDescription: "Vasil Ngjele, born in 1945.",
    subject: "On Leskovik and its poverty.",
    recorderdOn: "20210-11-18",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 261,
    // 40.150000, 20.583333
    coordinates: [40.15, 20.583333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD153_ALPR_Leskovik01.mp3",
  },
  {
    id: 154,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Kolonja,
    village: Borova,
    speakerName: "Tatjana Vllamasi",
    speakerDescription: "Tatjana Vllamasi, housewife, born in 1958.",
    subject: "On Borova and its history.",
    recorderdOn: "20210-11-18",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 145,
    // 40.300000, 20.650000
    coordinates: [40.3, 20.65],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD154_ALER_Borova01.mp3",
  },
  {
    id: 15,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Vlora,
    speakerName: "Anonymous male speaker",
    speakerDescription: "",
    subject: "Observations on the development of Vlora.",
    // it only says spring of 1999
    recorderdOn: "1999-03-18",
    recordedBy: ["Artur Metani"],
    duration: 55,
    // 40.450000, 19.483333
    coordinates: [40.45, 19.483333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD015_ALVL_Vlora01.mp3",
  },
  {
    id: 16,
    variant: SouthernToskSubDialectLabVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Vlora,
    village: Kanina,
    speakerName: "Anonymous male speaker",
    speakerDescription: "",
    subject: "Memories of the Second World War.",
    // it only says spring of 1999
    recorderdOn: "1999-03-18",
    recordedBy: ["Artur Metani"],
    duration: 82,
    // 40.433333, 19.516667
    coordinates: [40.433333, 19.516667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD016_ALVL_Kanina01.mp3",
  },
  {
    id: 206,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Vlora,
    village: Amantia,
    speakerName: "Dhimo Xhelili",
    speakerDescription: "Dhimo Xhelili, born in 2000 and raisedin Amantia.",
    subject: "On the ancient ruins of Amantia and the surrounding villages.",
    // it only says spring of 1999
    recorderdOn: "2016-05-21",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 97,
    // 40.366667, 19.683333
    coordinates: [40.366667, 19.683333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD206_ALVL_Amantia01.mp3",
  },
  {
    id: 47,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Tepelena,
    village: Arrëza,
    speakerName: "Myltezar Zyli",
    speakerDescription: "Myltezar Zyli, hotelkeeper in Tirana.",
    subject: "Remarks on Tosk dialects",
    // it only says spring of 1999
    recorderdOn: "2008-04-29",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 320,
    // 40.400000, 20.050000
    coordinates: [40.4, 20.05],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD047_ALTP_Arreza01.mp3",
  },
  {
    id: 152,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Përmet,
    village: Suka,
    speakerName: "Murat Hasani",
    speakerDescription: "Murat Hasani, born in 1951.",
    subject: "On the dervish Tekke of Suka and its destruction.",
    // it only says spring of 1999
    recorderdOn: "2010-11-17",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 227,
    // 40.366667, 20.150000
    coordinates: [40.366667, 20.15],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD152_ALPR_Suka01.mp3",
  },
  {
    id: 151,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Çorovoda,
    speakerName: "Vilson Gërmenji",
    speakerDescription: "Vilson Gërmenji, born in 1994, and Bilbil Kurti, born in 1996.",
    subject: "Boys discovering the countryside and playing games.",
    // it only says spring of 1999
    recorderdOn: "2010-11-16",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 183,
    // 40.500000, 20.233333
    coordinates: [40.5, 20.233333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD151_ALSK_Corovoda01.mp3",
  },
  {
    id: 66,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Skrapar,
    village: Leshnja,
    speakerName: "Myftar Kuka",
    speakerDescription: "Myftar Kuka, born in 1926.",
    subject: "Making raki.",
    // 1999-10
    recorderdOn: "1999-10-16",
    recordedBy: ["Xhelal Ylli", "Andrey Sobolev"],
    duration: 79,
    // 40.533333, 20.300000
    coordinates: [40.533333, 20.3],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD066_ALSK_Leshnja01.mp3",
  },
  {
    id: 67,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Skrapar,
    village: Leshnja,
    speakerName: "Kudret Ylli",
    speakerDescription: "Kudret Ylli, born in 1940.",
    subject: "The Bektashi feast days on Mount Tomorr.",
    // 1999-10
    recorderdOn: "1999-10-16",
    recordedBy: ["Xhelal Ylli", "Andrey Sobolev"],
    duration: 137,
    // 40.533333, 20.300000
    coordinates: [40.533333, 20.3],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD067_ALSK_Leshnja02.mp3",
  },
  {
    id: 68,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Skrapar,
    village: Kapinova,
    speakerName: "Gonxhe Ylli",
    speakerDescription: "Gonxhe Ylli, born in 1948.",
    subject: "Vampires.",
    // 1999-10
    recorderdOn: "1999-10-16",
    recordedBy: ["Xhelal Ylli", "Andrey Sobolev"],
    duration: 304,
    // 40.533333, 20.350000
    coordinates: [40.533333, 20.35],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD068_ALSK_Kapinova01.mp3",
  },
  {
    id: 164,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Korça,
    speakerName: "Dhimitër Beratti",
    speakerDescription:
      "Dhimitër Beratti (1896-1970). Recordedat the Sorbonne in Paris on 8 June 1921.Taken from the website of the Bibliothèque Nationale de France.",
    subject: "Folktale of 'The Hen Who Lays Gold'.",
    // 1999-10
    recorderdOn: "1921-05-08",
    recordedBy: ["Bibliothèque Nationale de France"],
    duration: 114,
    // 40.616667, 20.783333
    coordinates: [40.616667, 20.783333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD164_ALKO_Korca01.mp3",
  },
  {
    id: 208,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Korça,
    village: Voskop,
    speakerName: "Nurie Sejdolli",
    speakerDescription: "Nurie Sejdolli, born in 1950.",
    subject: "Personal reminiscences.",
    // 1999-10
    recorderdOn: "2017-03-21",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 166,
    // 40.600000, 20.683333
    coordinates: [40.6, 20.683333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD208_ALKO_Voskop01.mp3",
  },
  {
    id: 14,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Korça,
    village: Maliq,
    speakerName: "Anonymous male speaker",
    speakerDescription: "Anonymous male speaker, born in 1955.",
    subject: "Account of the speaker’s life during and after the communist period.",
    // spring 1999
    recorderdOn: "1999-05-21",
    recordedBy: ["Artur Metani"],
    duration: 187,
    // 40.700000, 20.700000
    coordinates: [40.7, 20.7],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD014_ALKO_Maliq01.mp3",
  },
  {
    id: 18,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Korça,
    village: Gjyras,
    speakerName: "Anonymous female speaker",
    speakerDescription: "Anonymous female speaker.",
    subject: "Reminiscences of Second World War, activities as a communist, and subsequent poverty.",
    // spring 1999
    recorderdOn: "1999-05-21",
    recordedBy: ["Artur Metani"],
    duration: 243,
    // 40.700000, 20.633333
    coordinates: [40.7, 20.633333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD018_ALKO_Gjyras01.mp3",
  },
  {
    id: 79,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Pogradec,
    village: Blaca,
    speakerName: "Kujtim Memili",
    speakerDescription: "Kujtim Memili, born in 1944. shepherd.",
    subject: "On herding.",
    recorderdOn: "2008-12-03",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 223,
    // 40.833333, 20.750000
    coordinates: [40.833333, 20.75],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD079_ALPG_Blaca01.mp3",
  },
  {
    id: 80,
    variant: NorthernToskSubDialectEasternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Pogradec,
    village: Hudenisht,
    speakerName: "Artur Dokallari",
    speakerDescription: "Artur Dokallari, born in 1986, fisherman.",
    subject: "On fishing in Lake Ohrid and on the local dialects.",
    recorderdOn: "2008-12-04",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 201,
    // 40.966667, 20.633333
    coordinates: [40.966667, 20.633333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD080_ALPG_Hudenisht01.mp3",
  },
  {
    id: 17,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Berat,
    village: Remanica,
    speakerName: "Anonymous male speaker",
    speakerDescription: "Anonymous male speaker.",
    subject: "Speaker’s experience as an illegal emigrant in Greece and his present life as a farmer.",
    // spring 1999
    recorderdOn: "1999-05-04",
    recordedBy: ["Artur Metani"],
    duration: 200,
    // 40.733333, 19.900000
    coordinates: [40.733333, 19.9],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD017_ALBR_Remanica01.mp3",
  },
  {
    id: 46,
    variant: NorthernToskSubDialectWesternVariant,
    region: SouthernAlbaniaArea,
    country: Albania,
    city: Berat,
    speakerName: "Thanas Cimbilli",
    speakerDescription: "Thanas Cimbilli, born in the fortress of Berat in 1943.",
    subject: "On the Orthodox church in Berat.",
    // spring 1999
    recorderdOn: "2008-04-29",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 97,
    // 40.700000, 19.933333
    coordinates: [40.7, 19.933333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD046_ALBR_Berat01.mp3",
  },
  // {
  //   id: 204,
  //   subDialect: 'Transitional'
  //   region: SouthernAlbaniaArea,
  //   country: Albania,
  //   city: Berat,
  //   speakerName: "Thanas Cimbilli",
  //   speakerDescription: "Thanas Cimbilli, born in the fortress of Berat in 1943.",
  //   subject: "On the Orthodox church in Berat.",
  //   // spring 1999
  //   recorderdOn: "2008-04-29",
  //   recordedBy: ["Robert Elsie", "Artur Metani"],
  //   duration: 97,
  //   // 40.700000, 19.933333
  //   coordinates: [40.7, 19.933333],
  //   artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD046_ALBR_Berat01.mp3",
  // },
  {
    id: 82,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Elbasan,
    speakerName: "Nadire Qosja",
    speakerDescription: "Nadire Qosja, born in 1956 in Gjergjan, raised in Elbasan.",
    subject: "On marriage customs in central Albania.",
    // spring 1999
    recorderdOn: "2008-12-04",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 255,
    // 41.100000, 20.066667
    coordinates: [41.1, 20.066667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD082_ALEL_Elbasan01.mp3",
  },
  {
    id: 83,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Elbasan,
    village: Gracen,
    speakerName: "Shaban Sina",
    speakerDescription: "Shaban Sina, born in 1943.",
    subject: "On the sufferings of the peasantry.",
    recorderdOn: "2008-12-04",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 207,
    // 41.150000, 19.966667
    coordinates: [41.15, 19.966667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD083_ALEL_Gracen01.mp3",
  },
  {
    id: 81,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Librazhd,
    speakerName: "Nesret Mana",
    speakerDescription: "Nesret Mana, born in 1964.",
    subject: "On building a house on a plot of land.",
    recorderdOn: "2008-12-04",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 173,
    // 41.183333, 20.300000
    coordinates: [41.183333, 20.3],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD081_ALLB_Librazhd01.mp3",
  },
  {
    id: 165,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Kavaja,
    speakerName: "Stavri Stavro",
    speakerDescription:
      "Stavri Stavro (b. ca. 1886). Recordedat the Sorbonne in Paris on 8 June 1921. Taken from the website of the Bibliothèque Nationale de France.",
    subject: "Recording of a letter to his brother in Kavaja.",
    recorderdOn: "1921-05-08",
    recordedBy: ["Bibliothèque Nationale de France"],
    duration: 127,
    // 41.183333, 19.550000
    coordinates: [41.183333, 19.55],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD165_ALKJ_Kavaja01.mp3",
  },
  {
    id: 7,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Tirana,
    village: Shesh,
    speakerName: "Anonymous male speaker",
    speakerDescription: "Anonymous male speaker, one-time Sigurimi agent.",
    subject: "About the good old days under Enver Hoxha.",
    // sprin 1999
    recorderdOn: "1999-05-08",
    recordedBy: ["Artur Metani"],
    duration: 222,
    // 41.300000, 19.650000
    coordinates: [41.3, 19.65],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD007_ALTR_Shesh01.mp3",
  },
  {
    id: 3,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Tirana,
    speakerName: "Tahir Hasa",
    speakerDescription: "Tahir Hasa, born in 1923.",
    subject: "Brief overview of speaker’s life fromSecond World War to present.",
    // sprin 1999
    recorderdOn: "1999-05-08",
    recordedBy: ["Artur Metani"],
    duration: 104,
    // 41.316667, 19.816667
    coordinates: [41.316667, 19.816667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD003_ALTR_Tirana01.mp3",
  },
  {
    id: 5,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Tirana,
    village: Bovilla,
    speakerName: "Anonymous male speaker",
    speakerDescription: "Anonymous male speaker.",
    subject: "Speaker’s experience as an illegal emigrant in Greece and his life back in Bovilla.",
    // sprin 1999
    recorderdOn: "1999-05-08",
    recordedBy: ["Artur Metani"],
    duration: 314,
    // 41.433333, 19.866667
    coordinates: [41.433333, 19.866667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD005_ALTR_Bovilla01.mp3",
  },
  {
    id: 6,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Tirana,
    village: Herraj,
    speakerName: "Met Neziri",
    speakerDescription: "",
    subject: "Speaker’s reminiscences.",
    // sprin 1999
    recorderdOn: "1999-05-08",
    recordedBy: ["Artur Metani"],
    duration: 528,
    // 41.433333, 19.833333
    coordinates: [41.433333, 19.833333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD006_ALTR_Herraj01.mp3",
  },
  {
    id: 63,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Kruja,
    village: Barkanesh,
    speakerName: "Qamile Stema",
    speakerDescription: "Qamile Stema, born in 1920.",
    subject: "On her decision to cut her hair and live as a man in the tradition of the northern Albanian Sworn Virgins.",
    // in 2008
    recorderdOn: "2008-05-05",
    recordedBy: ["Mike Lanchin", "BBC"],
    duration: 491,
    // 41.466667, 19.800000
    coordinates: [41.466667, 19.8],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD063_ALKR_Barkanesh01.mp3",
  },
  {
    id: 88,
    variant: SouthernGhegSubDialectCentralVariant,
    region: CentralAlbaniaArea,
    country: Albania,
    city: Kruja,
    speakerName: "Shaban Sheta",
    speakerDescription: "Shaban Sheta, born in 1955, taxidriver.",
    subject: "On a murder in Kruja.",
    // in 2008
    recorderdOn: "2008-12-06",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 251,
    // 41.500000, 19.783333
    coordinates: [41.5, 19.783333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD088_ALKR_Kruja01.mp3",
  },
  {
    id: 84,
    variant: SouthernGhegSubDialectSouthernVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Laç,
    speakerName: "Prena Zefi",
    speakerDescription: "Prena Zefi, born in 1951 and raised in Laç, resident of Rubik (Mirdita).",
    subject: "On her Catholic faith, Saint Anthony and miracles.",
    recorderdOn: "2008-12-06",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 293,
    // 41.633333, 19.700000
    coordinates: [41.633333, 19.7],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD084_ALLA_Lac01.mp3",
  },
  {
    id: 193,
    variant: SouthernGhegSubDialectCentralVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Mat,
    village: Rukaj,
    speakerName: "Nerim Lleshi",
    speakerDescription: "Nerim Lleshi, born in 1961, shepherd.",
    subject: "Difficult life of a shepherd.",
    recorderdOn: "2013-10-14",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 176,
    // 41.666667, 19.983333
    coordinates: [41.666667, 19.983333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD193_ALMT_Rukaj01.mp3",
  },
  {
    id: 70,
    variant: SouthernGhegSubDialectCentralVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Mat,
    village: Zenisht,
    speakerName: "Hamdi Ibrahim Xhetani",
    speakerDescription: "Hamdi Ibrahim Xhetani, born 1920 in Zenisht.",
    subject: "On local history and the opening of the first Albanian school there.",
    recorderdOn: "2008-12-01",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 268,
    // 41.666667, 19.983333
    coordinates: [41.666667, 19.983333],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD070_ALMT_Zenisht02.mp3",
  },
  {
    id: 69,
    variant: SouthernGhegSubDialectCentralVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Mat,
    village: Zenisht,
    speakerName: "Islam Alia",
    speakerDescription: "Islam Alia, born in 1936 in Zenisht.",
    subject: "On Zogolli land in Zenisht.",
    recorderdOn: "2008-12-01",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 259,
    // 41.616667, 20.016667
    coordinates: [41.616667, 20.016667],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD069_ALMT_Zenisht01.mp3",
  },
  {
    id: 194,
    variant: SouthernGhegSubDialectCentralVariant,
    region: NorthernAlbaniaArea,
    country: Albania,
    city: Mat,
    village: Burgajet,
    speakerName: "Salih Koci",
    speakerDescription: "Salih Koci, born in 1939.",
    subject: "Description of the region around Burgajet.",
    recorderdOn: "2013-10-14",
    recordedBy: ["Robert Elsie", "Artur Metani"],
    duration: 139,
    // 41.633333, 20.050000
    coordinates: [41.633333, 20.05],
    artifactUrl: "http://dialects.albanianlanguage.net/AL/audios/AD194_ALMT_Burgajet01.mp3",
  },
];
