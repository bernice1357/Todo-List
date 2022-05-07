<template>
<div class="home">
    <div class="add add1">
        <h1>Todo List</h1>
        <el-form ref="form" :model="form" label-width="50px" size="medium" :rules="rule">
            <el-form-item label="Title" prop="title">
                <el-input placeholder="記得繳電費(至多10個字)" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="Date" prop="date">
                <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="選擇日期"
                style="width: 100%;">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Note">
                <el-input type="textarea" placeholder="再不繳要過期了" v-model="form.note"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="addList">Add</el-button><!--傳送表單-->
                <el-button @click="clear">Clear</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="show show1">
        <h1>Added List</h1>
        <div style="height: 250px; overflow: auto; scroll:auto;">
            <div class="block" v-for="(item, index) in list" :key="index">
                <span style="float:left; width:160px">{{item.title}}</span>
                <span style="color: rgb(164, 88, 50); float:right; width:60px; text-align: right;">{{item.date}}</span><br>
                <p style="color: rgb(140, 149, 161)">{{item.note}}</p>
                <el-button class="del" size="mini" type="danger" icon="el-icon-delete" circle @click="delList(index)"></el-button>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            form:{
                title:"",
                note:"",
                date:""
            },
        }
    },
    computed:{
        list(){//回傳目前的list
            return this.$store.state.list;
        },
        rule(){
            return this.$store.state.rule;
        },
        month(){
            return this.$store.state.mon;
        },
        day(){
            return this.$store.state.day;
        }
    },
    methods:{
        updateForm(){
            return {
                title:"",
                note:"",
                date:""
            }
        },
        addList(){//傳送資料
            this.$store.commit('addList',this.form);
            this.form={};//傳送資料後清空form
            this.$nextTick(function () {
                this.$refs['form'].clearValidate();
            });
        },
        clear(){
            this.form={};//清空form
        },
        delList(index){
            this.$store.commit('delList', index);
        }
    }
}
</script>

<style>

@media(min-width:1120px){
    .add{
        position: fixed;
        top:20%;
        left: 25%;
        width: 20%;
    }
    .show{
        position: fixed;
        top:20%;
        left: 52%;
        width: 20%;
    }
}

@media(max-width:1120px){
    .add{
        position: fixed;
        top:20%;
        left: 15%;
        width: 30%;
    }
    .show{
        position: fixed;
        top:20%;
        left: 52%;
        width: 30%;
    }
}
@media(max-width:758px){
    .add{
        position: absolute;
        top: 1%;
        left: 3%;
        width: 90%;
        height: 50%;
    }
    .show{
        position: absolute;
        top: 5%;
        left: 3%;
        width: 90%;
    }
}

.add1{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 15px;
    border-radius: 20px;
    background-color:rgb(96, 173, 178);
}

.show1{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 15px;
    position: absolute;
    border-radius: 20px;
    background-color:rgb(78, 146, 180);
}

h1{
    text-align: center;
}

h3{
    margin: 0px;
}

p{
    margin: 0px;
}

.date{
    text-align: right;
}

.el-form{
    margin: 10px;
}

.block{ 
    padding:10px 15px 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    background-color:rgb(220, 235, 239);
    width: 89%;
}

.del{
    position: relative;
    left: 91%;
    top: 0%;
}
</style>

