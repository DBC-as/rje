for x in *.md
do
    pandoc -s -t s5 < $x > `echo $x | sed -e s/md$/html/`
done
