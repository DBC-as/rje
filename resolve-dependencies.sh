mkdir depend &&
cd depend &&
wget http://google-web-toolkit.googlecode.com/files/gwt-2.4.0.zip &&
unzip gwt-2.4.0.zip && 
rm -f gwt-2.4.0.zip &&
wget http://dl.google.com/android/android-sdk_r13-linux_x86.tgz &&
tar xzvf android-sdk_r13-linux_x86.tgz &&
rm android-sdk_r13-linux_x86.tgz &&
./android-sdk-linux_x86/tools/android update sdk &&
svn co https://xmlvm.svn.sourceforge.net/svnroot/xmlvm/trunk/xmlvm &&
cd xmlvm &&
ant &&
cd .. &&
echo dependency resolution done &&
exit
