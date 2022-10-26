import Page from './page'
class DevinoVoluntar extends Page {
    


    //actions
    open() {
        return super.open('/auth/register')
      }
    

}

export const devinoVoluntar = new DevinoVoluntar()