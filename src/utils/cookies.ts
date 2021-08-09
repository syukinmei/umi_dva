export function setCookie(name: string, value: string | number, n: number) {
    const oDate = new Date()
    oDate.setDate(oDate.getDate() + n)
    document.cookie = name + '=' + value + ';expires=' + oDate
  }
  
  export function getCookie(name: string) {
    const str = document.cookie
    const arr = str.split('; ')
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[i].split('=')
      if (newArr[0] == name) {
        return newArr[1]
      }
    }
  }
  
  export function removeCookie(name: string) {
    setCookie(name, 1, -1)
  }
  