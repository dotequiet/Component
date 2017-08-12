#!/bin/sh
echo "所有参数：$*"
echo "参数个数：$#"
echo "脚本执行当前进程的ID: $$"
a="hello world"
echo "this is:"
echo $a
for file in `ls /Users/wfq/Desktop/vuetest/vueclitest/src/*`
do
  if test -f $file
  then
    echo "输出的是文件：${file}"
  else test -d $file
    echo "输出的是文件夹：${file}"
  fi
done

ax=('a' 'b' 'c' 'd')
echo ${#ax[*]}
for i in ${ax[@]}
  do
    echo $i
  done
testvar="test date"
echo ${testvar}
unset testvar
#判断一个字符串是否为空
if [ "${testvar}" ];then
   echo "存在"
else
   echo "不存在"
fi

testReadonly="readonly"
echo $testReadonly
testReadonly="changeReadonly"
echo $testReadonly
#readonly不能修改变量
readonly testReadonly
# testReadonly="hasReadonly"
echo testReadonly
your_name='qinjx'
str="Hello, I know your are \"$your_name\"! \n"
#单双引号区别
echo ${str}
#输出字符串长度
echo ${#str}
#截取字符串
echo ${str:1:4}
string="runoob is a great company"

#将a文件内的重复字母去掉放到b文件内
tr '[a-z]' '[A-Z]'<a.txt >b.txt

#运算符
a=10
b=20
var=`expr $a + $b`
echo ${var}
if [ $a -eq $b ]
  then
    echo "相等"
else
  echo "不等"
fi

if [ $a -gt $b ]
  then
    echo "左边大于右边"
else
  echo "左边小于右边"
fi
if [ $a -lt $b ]
  then
    echo "左边小于右边"
else
  echo "左边大于右边"
fi

if [ $a -ge $b ]; then
  echo "左边大于等于右边"
else
  echo "左边小于右边"
fi
if [ $a -le $b ]; then
  echo "左边小于等于右边"
else
  echo "左边大于等于右边"
fi
if [ $a -lt 100 -o $b -gt 100 ]
then
   echo "$a -lt 100 -o $b -gt 100 : 返回 true"
else
   echo "$a -lt 100 -o $b -gt 100 : 返回 false"
fi

read name
case $name in
  a ) echo "你输入了：apple"
    ;;
  b ) echo "你输入了：banner"
    ;;
esac
echo "${name} It is name"

echo "this is new world" >b.txt

#显示执行命令结果
echo `date`

#printf输出命令
printf "%-10s %-8s %-5s\n" 姓名 性别 体重kg
printf "%-10s %-8s %-5.3f\n" ange 男 45.6788
printf "%-10s %-8s %-5.3f\n" xxx 女 45.6788
printf "%-10s %-8s %-5.3f\n" xxxx 女 45.6788

printf "%s %s %s\n" a b c d e f g h i j
echo "a string, no processing: $2\n"
printf "$1\n"
printf "a string, no processing: <%s>\n" $1

# ssh dote@dev
cp -f ./b.txt ./newfile.txt
zip -r newfile.zip ../../src
cd /Users/www/Desktop/ccc/rrr && git branch

scp dote@dev

