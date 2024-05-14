if($args[0] -eq "11") {
   $Env:JAVA_HOME="$ENV:JAVA11"
   $Env:Path="$Env:JAVA_HOME\bin;$Env:Path"
} elseif($args[0] -eq "17") {
   $Env:JAVA_HOME="$ENV:JAVA17"
   $Env:Path="$Env:JAVA_HOME\bin;$Env:Path"
} elseif($args[0] -eq "8") {
   $Env:JAVA_HOME="$ENV:JAVA8"
   $Env:Path="$Env:JAVA_HOME\bin;$Env:Path"
}
set "Path=%JAVA_HOME%\bin;%Path%"
java -version
