import styled from 'vue-styled-components'

export const Menu = styled.div`

    width:220px;

    .header{
        width:100%;
        height:115px;
        background:rgb(29,31,36);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around ;
        p{
            background:rgb(29,31,36);
            color:#fff
        };
        P:nth-of-type(1){
            font-size:24px;
        }
    }
    .ul{
        width:100%;
        height:225px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:#fff;
        li{ 
            color:rgb(163,163,163);
            width:100%;
            height:40px;
            line-height:40px;
            text-indent:30px;
        }
        li:hover{
            color:rgb(29,31,36);
            background:rgb(241,245,248);
        }

    }
    .imga{
        width:100%;
        display:flex;
        flex-direction:column;  
        background:#eee;
        .imgBox{
            width: 100%;
            background: #fff;
            display: flex;
            flex-direction:column;
            justify-content: space-around;
            align-items: center;
            margin-top:10px;
            img{
                width:110px;
                height: 110px;
                padding:10px 0;
            }
            span{
                font-weight:500;
            }
        }
        .gitlist{
            .sum{
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                background:#fff;
                padding:10px 0;
                p{
                    padding:5px 0;
                    font-size:14px;
                };
                P:nth-of-type(1){
                    font-weight:500;
                }
                P:nth-of-type(2){
                    color:rgb(199,199,199)
                }
            }
            .git{
                width:100%;
                display:flex;
                flex-wrap:wrap;
                justify-content:space-around;
                align-items:center;
                p{
                    flex:30%;
                    background:#fff;
                    height: 50px;
                    line-height:40px;
                    text-align:center;
                    font-weight:500;
                    font-size:14px;
                }
            }
        }
        
    }


`