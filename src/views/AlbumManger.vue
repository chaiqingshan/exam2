<template>
    <div>
        <el-dialog
                title="详细信息"
                :visible.sync="detailDia"
                width="30%">
            <div>ID:{{this.detail.id}}</div>
            <div>名称:{{this.detail.name}}</div>
            <div>价格:{{this.detail.price}}</div>
            <div>发布日期:{{this.detail.public_time}}</div>
             <div>week:{{this.detail.week}}</div>
            <div>封面:</div>
            <img :src="this.detail.cover" alt="">
            <span slot="footer" class="dialog-footer">
                <el-button @click="detailDia = false">取 消</el-button>
                <el-button type="primary" @click="detailDia = false">确 定</el-button>
            </span>
        </el-dialog>


        <h1>音乐专辑管理</h1>

        <el-table
                :data="albums"
                style="width: 90%">
            <el-table-column
                    prop="album_id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="album_name"
                    label="专辑名称"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop="singers[0].singer_name"
                    label="歌手名">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                   >
                <template slot-scope="book">
                    <el-button @click="showDetail(book.row)" type="text" size="small">详细内容</el-button>
                    <el-button @click="deleteAlbum(book.row)" type="text" size="small">删除</el-button>
                    <el-button @click="dialogVisible=true" type="text" size="small">编辑</el-button>
                    <el-button @click="dialogVisible=true" type="text" size="small">追加歌手</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>

    export default {
        name: "AlbumManger",
        created() {
            fetch(this.url, {type: "GET"})
                .then(res => res.json())
                .then(abs => this.albums = abs)
        },
        data() {
            return {
                url: "http://39.99.194.217:3000/albums",
                maxId: 2,
                book: {name: '', price: ''},
                detailDia: false,
                albums: [],
                detail:{
                    id:'',
                    name:'',
                    price:'',
                    public_time:'',
                    singers:[],
                    week: '',
                    cover:''
                }
            }
        },
        methods: {
            deleteAlbum(album) {
                fetch(this.url+"/"+album._id,{method:"DELETE"})
                    .then(res=>res.json())
                    .then(()=>{
                        let index = this.albums.findIndex(item => item._id == album._id)
                        this.albums.splice(index, 1)
                    })

            },
            addSinger(album) {
                fetch(this.url, {
                    method: "POST", headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.book)
                }).then(res=>res.json())
                    .then(nb=>this.albums.push(nb))
            },
            showDetail(book){
                // console.log(id)
                this.detailDia=true;
                this.detail.id=book.album_id
                this.detail.name=book.album_name
                this.detail.price=book.price
                this.detail.public_time=book.public_time
                this.detail.week=book.week
                this.detail.cover=book.cover
            }
        }
    }
</script>

<style scoped>

</style>