import test from "ava"
import Chronus from "../index.mjs"

const c = (i) => new Chronus(i)

test("test", (t) => {
  t.is( c(1).year().toInteger(), 31536000000 );
  t.is( c(1).month().toInteger(), 2592000000 );
  t.is( c(1).month(28).toInteger(), 2419200000 );
  t.is( c(1).month(31).toInteger(), 2678400000 );
  t.is( c(1).week().toInteger(), 604800000 );
  t.is( c(1).day().toInteger(), 86400000 );
  t.is( c(1).hour().toInteger(), 3600000 );
  t.is( c(1).minute().toInteger(), 60000 );
  t.is( c(1).second().toInteger(), 1000 );
  t.is( c(1).millisecond().toInteger(), 1);

  t.is( c(1).day().and( c(2).second() ).toInteger(), 86402000)
});
