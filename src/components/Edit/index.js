import styled from 'vue-styled-components'

export const Edit = styled.div`

    padding: 40px;
    font-size: 16px;

    .return_button {
        text-align: left;
        margin-bottom: 40px;
    }

    .edit_head {
        margin: 20px 0;
        text-align: left;
    }
    .tag_wrap {
        text-align: left;
        padding: 20px 0;
        .input-new-tag {
            width: 80px;
            height: 28px;
        }
    }
    .markdown {
        text-align: left;
        border: 1px solid #bfcbd9;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        width: 100%;
        height: 800px;
        vertical-align: top;
        background: #f5f7f9;
        overflow: hidden;

        .markdown_input {
            float: left;
            display: inline-block;
            width: 49%;
            height: 98%;
            background-color: white;
            padding-left: 1%;
            padding-top: 1%;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }

        .markdown_compiled {
            overflow: auto;
            float: right;
            display: inline-block;
            width: 47%;
            height: 100%;
            padding: 5px 0 5px 1%;
        }

        textarea {
            border: none;
            resize: none;  /*不可拖动*/
        }

    }

    .save_button {
        padding: 40px 0;
        text-align:center;
    }

`
