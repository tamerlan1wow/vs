const Petro = document.getElementById('Petro')
const Tucson = document.getElementById('Tucson') 
const Tokyo = document.getElementById('Tokyo')
const Kokshetau = document.getElementById('Kokshetau')
const Albuquerque = document.getElementById('Albuquerque')

async function Api() {
    const respons_Petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m') 
    const respons_Tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m')
    const respons_Tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m') 
    const respons_Kokshetau = await fetch('https://api.open-meteo.com/v1/forecast?latitude=53.2833&longitude=69.4&current=temperature_2m')
    const respons_Albuquerque = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.2208&longitude=-7.0023&current=temperature_2m')
    
    const data_Petro = await respons_Petro.json()
    const data_Tucson = await respons_Tucson.json() 
    const data_Tokyo = await respons_Tokyo.json() 
    const data_Kokshetau = await respons_Kokshetau.json()
    const data_Albuquerque = await respons_Albuquerque.json()

    return [data_Petro, data_Tucson, data_Tokyo, data_Kokshetau, data_Albuquerque]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        Petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        Tucson.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        Tokyo.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        Kokshetau.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`
        Albuquerque.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()
