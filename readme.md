時間（期間）を取り扱うライブラリ

# Install
~~~
npm install cyder1108/chronus
~~~

# Example
~~~
import c from "chronus"
~~~

~~~
c(1).year().toInteger() //=> 31536000000

c(1).month().toInteger() //=> 2592000000 (30days)
c(1).month(28).toInteger() //=> 2419200000
c(1).month(31).toInteger() //=> 2678400000

c(1).week().toInteger() //=> 604800000

c(1).day().toInteger() //=> 86400000

c(1).hour().toInteger() //=> 3600000

c(1).minute().toInteger() //=> 60000

c(1).second().toInteger() //=> 1000

c(1).millisecond().toInteger() //=> 1
~~~
~~~
c(1).day().and( c(2).second() ).toInteger() //=> 86402000
~~~
