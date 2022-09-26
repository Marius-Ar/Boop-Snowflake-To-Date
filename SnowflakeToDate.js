/**
 {
    "api":1,
    "name":"Snowflake to Date",
    "description":"Converts a Discord snowflake to a readable date",
    "author":"Marius-Ar",
    "icon":"clock",
    "tags":"discord,snowflake"
  }
**/

function main(state) {
  const snowflake = state.selection || state.fullText;
  if (snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> 22n);
    state.fullText = new Date(dateBits + 1420070400000);
  }
}