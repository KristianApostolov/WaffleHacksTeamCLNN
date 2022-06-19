async function getSnapshot() {
    await getDoc(doc(db, "/User_info/NiymYFmYbE6oapDh1l2z"))
        .then(snapshot => {

            var username = snapshot.data()["UserStats"]["username"];

            console.log(username);
        })
    }