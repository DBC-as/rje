mkdir workspace
cd workspace
for repos in `cat ../ding2repos`
do
    git clone git@github.com:ding2/$repos.git
    cd $repos
    cp ../../COPYING .
    git add COPYING
    git commit -m "Added the DBC A/S + TING.Community copyright, license terms (GPLv2 or later) and notes."
    git push
    cd ..
done
