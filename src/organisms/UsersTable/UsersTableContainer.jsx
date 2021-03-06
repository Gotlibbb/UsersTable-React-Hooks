import {UsersTable} from "./UsersTable";
import React, {useCallback, useState} from "react";
import {ModalWindowTable} from "../../molecules/table/ModalWindowTable";
import {v1} from "uuid";

const initUsers = [
    {
        sername: "Иванов",
        name: "Иван",
        fatherName: "Иванович",
        email: "mail1@mail.com",
        login: "user1",
        id: v1(),
    },
    {
        sername: "Петров",
        name: "Петр",
        fatherName: "Сергеевич",
        email: "mail2@mail.com",
        login: "user2",
        id: v1(),
    },
    {
        sername: "Сергеев",
        name: "Григорий",
        fatherName: "Викторович",
        email: "mail3@mail.com",
        login: "user3",
        id: v1(),
    },
    {
        sername: "Федоров",
        name: "Виктор",
        fatherName: "Федорович",
        email: "mail4@mail.com",
        login: "user4",
        id: v1(),
    },
    {
        sername: "Хвастунов",
        name: "Сергей",
        fatherName: "Петрович",
        email: "mail5@mail.com",
        login: "user5",
        id: v1(),
    },
    {
        sername: "Григорьев",
        name: "Федор",
        fatherName: "Григорьевич",
        email: "mail6@mail.com",
        login: "user6",
        id: v1(),
    },
];

export const UsersTableContainer = React.memo(() => {

    const [users, setUsers] = useState(initUsers);

    const AddUserHandler = useCallback((newUser) => {
        setUsers([

            {
                sername: newUser.sername,
                name: newUser.name,
                fatherName: newUser.fatherName,
                email: newUser.email,
                login: newUser.login,
                id: v1(),
            }, ...users
        ]);
    }, [users, setUsers]);

    const UpdateUserHandler = useCallback((upUserData, userId) => {
        setUsers(
            users.map((u, i) => {
                if (u.id === userId) {
                    return (u[i] = upUserData);
                }
                return u;
            })
        );
    }, [users, setUsers])

    const DeleteUserHandler = useCallback((userId) => {
        setUsers(users.filter((u) => u.id !== userId));
    }, [users, setUsers]);

    //активация модальных окон
    const [updateModalActive, setUpdateModalActive] = useState(false);
    const [createModalActive, setCreateModalActive] = useState(false);
    const [deleteModalActive, setDeleteModalActive] = useState(false);
    //актуальный userId
    const [currentUserId, setCurrentUserId] = useState("")

    // if (updateModalActive || createModalActive || deleteModalActive) document.body.style.overflow = "hidden"

    return (
        <>
            {createModalActive && <ModalWindowTable createModalActive users={users} closeModal={setCreateModalActive}
                                                    AddUserHandler={AddUserHandler}/>}

            {updateModalActive && <ModalWindowTable updateModalActive users={users} closeModal={setUpdateModalActive}
                                                    UpdateUserHandler={UpdateUserHandler}
                                                    currentUserId={currentUserId}/>}

            {deleteModalActive && <ModalWindowTable deleteModalActive users={users} closeModal={setDeleteModalActive}
                                                    DeleteUserHandler={DeleteUserHandler}
                                                    currentUserId={currentUserId}/>}

            <UsersTable
                users={users}
                AddUserHandler={AddUserHandler}
                UpdateUserHandler={UpdateUserHandler}
                DeleteUserHandler={DeleteUserHandler}
                setUpdateModalActive={setUpdateModalActive}
                setCreateModalActive={setCreateModalActive}
                setDeleteModalActive={setDeleteModalActive}
                setCurrentUserId={setCurrentUserId}
            />
        </>
    );
})
