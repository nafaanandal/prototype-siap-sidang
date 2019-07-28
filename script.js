function getData() {
    fetch('https://us-central1-si-xgracias.cloudfunctions.net/LihatNilaiMahasiswa')
        .then(res => {
            return res.json()
        })
        .then(data => {
            let idFirebase
            let idNilai
            let nilaiUTS
            let nilaiUAS
            data.forEach(item => {
                idFirebase = item.id
                idNilai = item.id_nilai
                nilaiUTS = item.nilaiUTS
                nilaiUAS = item.nilaiUAS
            })
            document.querySelector('#idFirebase').value = idFirebase
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
    let idData = document.querySelector('#idFirebase').value
    let elIDNilai = document.querySelector('#idNilai').value
    let elNnilaiUTS = document.querySelector('#nilaiUTS').value
    let elNnilaiUAS = document.querySelector('#nilaiUAS').value

    updateData(idData, elIDNilai, elNnilaiUTS, elNnilaiUAS)
})