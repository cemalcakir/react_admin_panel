import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const PostEdit = (props) => {
    return (
        <div>
            <Edit title="Post'u Düzenle" {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"></TextInput>
                    <TextInput source="title"></TextInput>
                    <TextInput multiline source="body"></TextInput>
                    <DateInput label="Published" source="publishedAt"></DateInput>
                </SimpleForm>
            </Edit>
        </div>
    )
}

export default PostEdit
