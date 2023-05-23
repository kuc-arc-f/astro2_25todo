import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
import { marked } from 'marked';
//
const Crud = {
  /**
   * delete:
   * @param key: any
   *
   * @return
   */   
  delete : async function(id: number) : Promise<any>
  {
    try{
      let ret = false;
      const item = {
        id: id
      }
//console.log(item);
      const json = await HttpCommon.server_post(item, '/todos/delete');
//console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }      
      return ret;      
    } catch (e) {
      console.error(e);
    }
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      //btn
      const elm: any = document.querySelector('#item_id');
      const id = elm?.value;
      //item_content
      const md = (<HTMLInputElement>document.querySelector("#item_content")).value;
console.log(md);
      const content = marked.parse(md);
      const contentElem = (<HTMLInputElement>document.querySelector("#post_item"));
      contentElem.innerHTML = content;
console.log("id=", id);
      const button: any = document.querySelector('#btn_delete');
      button.addEventListener('click', async () => {
        const res = await this.delete(Number(id));
console.log(res);
        if(res) {
          window.location.href = '/todo';	
        }
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Crud.startProc();

export default Crud;
