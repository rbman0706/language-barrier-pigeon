const url = `http://localhost:3001/api/translations`


class TranslationModel {
    static all = () => {
      return fetch(`${url}/history`).then(res => res.json())
    }
  
    static show = (translationId) => {
      return fetch(`${url}/${translationId}`).then(res => res.json())
    }
  
    static create = (translationData) => {
      return fetch(`${url}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(translationData)
      })
        .then(res => res.json())
    }
  }
  
  export default TranslationModel