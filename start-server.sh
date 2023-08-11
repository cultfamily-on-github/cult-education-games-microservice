if [ "$1" = "" ] 
then
    echo "please provide either locally or productionmode as a parameter when calling this shell script"

else


if [ "$1" = "locally" ]
then

    echo "starting the server locally"
    deno run --allow-env --allow-read --allow-write --allow-net ./backend/server.ts 8042

fi


if [ "$1" = "productionmode" ]
then
    echo "starting the donations server in production mode"
    pm2 start backend/server.ts --interpreter="deno" --interpreter-args="run --allow-read --allow-write --allow-env --allow-net --unstable" -- 443
    # pm2 start backend/cult-donations-server.ts --interpreter="deno" --interpreter-args="run --allow-read --allow-write --allow-env --allow-net --unstable" -- 443
fi 
fi 


