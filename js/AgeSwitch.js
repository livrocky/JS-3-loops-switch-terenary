const age = 100;

switch (true) {
  case age <= 17:
    console.log(`vaikas`);
    break;
  case age <= 60:
    console.log(`suauges`);
    break;
  case age <= 100:
    console.log("saulelydis");
  default:
    console.log("nezinau ar tiesa kad naudojiesi kompiuteriu");
}
