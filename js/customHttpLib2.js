class myHTTP{

  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  async post(url, body){

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await res.json();
      return data;

  }

  async put(url, body){
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      return data;

  }

  async delete(url, body){

      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
      })
      const data = await res.json();
      return data;
  }

}
