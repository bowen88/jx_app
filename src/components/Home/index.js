import styled from 'vue-styled-components'

export const ContentBox = styled.div`

  width: 760px;
  background: #fff;
  margin-left: 10px;
  min-height:680px;
  max-height:98vh;
  overflow-y:all;
  overflow:hidden;
  overflow-y:auto;

    .listBox{
        width:700px;
        height:350px;
        margin:0 auto;
        text-align:center;
        .header{ 
            display: inline-block;
            color: #222;
            font-size: 34px;
            font-weight: 600;
            border-bottom: 1px solid white;
            cursor: pointer;
            margin: 30px;
        }
        .header:hover{
            border-bottom: 1px solid #222;
        }
        .date{
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            color:rgb(169,169,169);
            font-size:14px;
            .tag{
                margin:3px;
                height:24px;
                line-height:24px;
                padding: 0 5px;
            }
            .tags{
                margin-left:3px;
            }
        }
        .content{
            width:100%;
            padding:40px 0 40px 0;
            text-align:left;
            line-height:25px;
        }
        .btnBox{
            display: inline-block;
            padding: 6px 12px;
            border: 2px solid #222;
            color: #222;
            font-size: 14px;
            cursor: pointer;
        }
        .btnBox:hover{
            color:#fff;
            background-color:#222;
        }
        .hr{
            height: 1px;
            width: 40px;
            background: #545455;
            margin: 80px auto 0;
        }
        
    }
`