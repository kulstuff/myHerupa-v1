const A = [
  "https://calendar.google.com/calendar?cid=dmw1MW9kaXQ0NmRnNjNrYzQxdjh1bTI5a29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ZGlyOXZoNzI5bmsybHBkZ2RrZGM2ZDM3bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MzVtNDltbnZsZjJsa29kYzFiazZuYTJzb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cWdyZW1zMnQ0aWx2dTlnOGN2ZW5uY2UxZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MnRlYWkwdThwbHJjN2Nucm10cmFmMmNrNW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const B = [
  "https://calendar.google.com/calendar?cid=ZXUxcm1yaWthcG1idjZvbTR0dHQ0bnE0Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MHFxdGduZHM3MjFycGpycXZqNWlpMnZ0aXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MzljbmVtaXRldWUwN2ZzdHVtbDRsdGc2MmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=a2YzZHUzYzZuMWlmaHI2MWtqM3ZrbzVkOGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ZzcxdG9ka29hOTQwN2R1b3IyaWhnOXJoMWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const C = [
  "https://calendar.google.com/calendar?cid=Yjk4ZHRzcmw1M2xma2l0MjFnNGhoZmlhajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MmNibmNmMDNyOG1lMnVucGs4Mmd2NnF0ZzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YmdkM3RrcDZ1YTBxMTQxODJyM3Uxc3VmYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NG8xMjlnaDJrdHRkODQ3NzlwMjlkc2Rtc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ZjdwbGo3YTVjZTcxNWNzbzlyN2R2M2wyYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const D = [
  "https://calendar.google.com/calendar?cid=YWpxNDl2YXVham0ydG51OTNyM2luZ3FwZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=aGZoNGk0dG1kY2MzdWxsaGNuMTd0aWlkazhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=dGFnMnR0dnI3ZGgzdGJ0MXNpdnJmazA2MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NmplZzQ3ZnR0MXY5bHYzNDk1NWtkYjRuZ3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=dDBldWNiamk2YzdzN2UxdW1waWY2dHBxYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const E = [
  "https://calendar.google.com/calendar?cid=b3QxcXBuczkzaTM0ZnY5MnV0ZmMyMDNwaWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=c3NwNGVscGFjcm9taG8waGdmZW12N3E5cjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=M2VqNTQ0cjRpcDhscmdicThoYWljaW05b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=N2tlZ2Q4dWNzcnBwdmFvZm12bzVwNXU0OWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NTcyM2tlZXN1czc2djhkdHV2NWgxZ2JmZmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const F = [
  "https://calendar.google.com/calendar?cid=dWs4aDViYzhncGczNG12NXI5bWh2YTA4NDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YTBkdmM3NGJpMWZqaTRmbjgyODF2bmlxZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YTk5NTBxMms1YXEzNHAxZ2k1YmxkZWt2bThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bmVhZTd1NWN0ZzFubW9hYjNhc3EzdWprbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=amk5bmNkNmM5cHZxZWJlZHJmY2VmZmFlcW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const G = [
  "https://calendar.google.com/calendar?cid=MnZuZ2lmb3V2bnM1MnJpdnZhMmxwZDBtcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=dGxvcWxvdmtnbTMxbXNmZ3I3YjVmbDdra2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NTY3OHJ0NTFwM21hbTVocDB0aTk2M21ha2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=amhlZ2dncTFpNXQ3bjJhZGIwb3ViMGo1a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bDZqbGl0dTQxaG1jM201YTlmN3Noc3NwaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const H = [
  "https://calendar.google.com/calendar?cid=M2p2aHBndGdpczIwOXRvNmxoa2Z1MXNua29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=OTdiaG41MjQ4Z3ZlYmoxa2VyZnRsMnY2Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=aXVrYm1oaHR0dDhnbzllZjhmZXM0dTJpODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bnJxanJuaTI1M3FqZ3N2cXM1c3VsMDQxczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bGxyZW5xbDY3dGllaDc2ZmxlM3V2Z3BiZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const I = [
  "https://calendar.google.com/calendar?cid=b3Zzc29mamMyNXM1dTYzbzk5NGd1amRkZjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bW9iMzU3M2g1OTZ0cDBvcjl1a2dvNnI1bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cWN1bTZmcm9iMWVjMGxqYmc0dDdzZ2ljaThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MWhjZmdyNnZ0Yzc2bjdrYjkzY3Axbm9odG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YWY4NHYyaWY0NGlkNWxoZDZzOWEwMWVsMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const J = [
  "https://calendar.google.com/calendar?cid=ZW81OG1zcGcycTl1c3Z2cDBjNmdib3BtaWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YjVoN2JvajhqYmYydWhpZmdnM2NpbWpnNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MDEwdTYxNmZnbG1sNGkxdmdnbDN0ZWkxbXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bjU5dm5mdjdnOTludmJsaHFhM2FiMG84MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cnJwaDlrcjE4bnZxazZkOW9xYzE0ajdkamNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const K = [
  "https://calendar.google.com/calendar?cid=ZWIwNG05dWlwcWxzOHIzMHEya3VxOGQ3ZThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NWVkamRlcnM0YmxjNmFuMjlxZmllZWo0azBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NWY3MTVkdTA2NHZuajhqZmsxdTJpa3E2dm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bnE0ZjlybXBzZzk0OWNjcWk4ZzVhb284bnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=azNoZ3FkZmZsYjZhODQ3YmE5aDRmbzg0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const L = [
  "https://calendar.google.com/calendar?cid=YmVtbTFvbzVkbm85NnZnaXBtbnR0cGlxbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ZWUxb2wybW0wdXI4aGhkbDRyZzZibTEwa2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cTk2Ymg3N20xdTNja3V2MXFzNmxnbGh2ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=aWtqajNoc29paWg5bnQ4bWl1azFhamlmM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=aGxiOW02a3QyY28xdHRsb3Jtc3NrcDFlZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const M = [
  "https://calendar.google.com/calendar?cid=Z3Z0ZWt2bWJzM3Y3NjhqZ3E1Z3BvOHZ0ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=NHBlZ2xucTZpODdrOHZ1b3M2bG10NHMxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=OXJnMW4wcDc1ZTQwYnFjMmllZm04ZDh2bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YjNpcmpsM2FrMXZsNmpsODE2a2JhcGtxNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=M3ZoNXBsZzh1MXI5amVsamRxZzJsaGVkNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const N = [
  "https://calendar.google.com/calendar?cid=ZmwwMzB2YnYyb3BxdHI4NGtlcWRrNjc0YzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cTdnY2VyYzFza2pyYTFhdmZrcW9qb25jajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=MTI3aG5rNmZnY2FqYmNjcWU2bmh0dXY5ZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=dmhkcW1oOXNzZGplanA0cDhhZ250ZGZhZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=M2luaTBwOHJpc28wZGNna3JtNjg0cTJ0cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const O = [
  "https://calendar.google.com/calendar?cid=MGdwOWw0aWFmbjA2cXUybTdxODF0dHMybThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bzExNXZsa3RrZGRzdWt1MXBodDBmazZvc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cmdwbGs1YThtdTExMWx2Z3U5ZGYydDh2MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=bmJkNTdjamk5Ym91ZjVhNnZuc2FjZjNhZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=azduczVrbjFybWd1M202NTQxc2R2YTlndjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const P = [
  "https://calendar.google.com/calendar?cid=N2o3NDAyMTN2M241dnBmdnZuNW9nNXJwb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=cmtodmk1NHB2ZWR1bmJlODBnbGNydjNkMjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=YWdlc2dlcjZhdmpqam04aTBya3F2bWRpMmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ZTE4ZG82YjAwNHNpNzc2MmFyMGk1cmFlMGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=ajJ1ZXBrYTdtc3Z2N25pMzIyZzZnNHNlMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];

const BTD = [
  "https://calendar.google.com/calendar?cid=bmo3bXF2aW9xMDFmbnBjbm9iM2dzaGNlazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=dmE2Zm9tZmpyajQzNWU4ZnFza2lzbjBqcWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
  "https://calendar.google.com/calendar?cid=b250MXBvN3NqbWdyN2huYWpjc3U0ZWVnZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
];
