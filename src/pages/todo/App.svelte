<script lang="ts">
import CrudIndex from "./CrudIndex";
let items = [], itemsTodos = [];
//
const startProc= async function() {
	itemsTodos = await CrudIndex.getList();
	items = itemsTodos.filter(item => (item.completed === 0));
	console.log(items);
}
startProc();
//
const search = async function() {
	console.log("search");
	items = await CrudIndex.search();
	console.log(items);
}
//
const changeComplete = async function() {
	console.log("#changeComplete"); 
	items = itemsTodos.filter(item => (item.completed === 1));
console.log(items);
}
//
const changeActive = async function() {
	console.log("#changeActive"); 
	items = itemsTodos.filter(item => (item.completed === 0));
console.log(items);
}

</script>

<div class="">
    <h1>Todos</h1>
    <p>markdown display possible.</p>
    <hr class="my-1" />	
    <a href={`/todo/create`} class="btn btn-primary">Create</a>
    <hr class="my-1" />	
    <button id="status_none" class="btn btn-outline-primary" on:click={changeActive}
    >Active</button>	
    <button class="btn btn-outline-primary" on:click={changeComplete}>Complete</button>
    <hr class="my-1" />	
    {#each items as item}
    <div>
        <h3>{item.title}</h3>
        <p>ID : {item.id}
            <a href={`/todo/show/${item.id}`} class="mx-2 btn btn-sm btn-outline-primary">Show
            </a>
            <a href={`/todo/edit/${item.id}`} class="btn">[ Edit ]
            </a>			
        </p>
        <hr />
    </div>
    {/each}		
</div>

<style>
</style>

<!--
-->