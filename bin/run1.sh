for i in {1..5}
do
    echo "Welcome $i times"
    sleep 1
done
>&2 echo "error"
exit 1
for i in {1..5}
do
    echo "RIP"
    sleep 1
done