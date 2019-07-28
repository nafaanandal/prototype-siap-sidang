function getData() {
    fetch('https://us-central1-si-xgracias.cloudfunctions.net/LihatNilaiMahasiswa')
        .then(res => {
            return res.json()
        })
        .then(data => {
            let idNilai
            let nilaiUTS
            let nilaiUAS
            data.forEach(item => {
                localStorage.setItem("idData", item.id);
                idNilai = item.id_nilai
                nilaiUTS = item.nilaiUTS
                nilaiUAS = item.nilaiUAS
            })
            document.querySelector('#idNilai').value = idNilai
            document.querySelector('#nilaiUTS').value = nilaiUTS
            document.querySelector('#nilaiUAS').value = nilaiUAS
        })
}

function updateData(id, idNilai, nilaiUTS, nilaiUAS) {
    var data = { id: id, id_nilai: idNilai, nilaiUTS: nilaiUTS, nilaiUAS: nilaiUAS }
    fetch(`https://us-central1-si-xgracias.cloudfunctions.net/updateNilaiMahasiswa`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        location.reload()
    })
}

getData()

document.querySelector('#submitBtn').addEventListener('click', function () {
    let idData = localStorage.getItem("idData");
    let elIDNilai = document.querySelector('#idNilai').value
    let elNnilaiUTS = document.querySelector('#nilaiUTS').value
    let elNnilaiUAS = document.querySelector('#nilaiUAS').value

    updateData(idData, elIDNilai, elNnilaiUTS, elNnilaiUAS)
})