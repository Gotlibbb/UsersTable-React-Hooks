import {UsersTable} from "./UsersTable";
import {useState} from "react";
import {ModalWindowTable} from "../../molecules/table/ModalWindowTable";

const initUsers = [
    {
        sername: "Иванов",
        name: "Иван",
        fatherName: "Иванович",
        email: "mail1@mail.com",
        login: "user1",
        id: 1
    },
    {
        sername: "Петров",
        name: "Петр",
        fatherName: "Сергеевич",
        email: "mail2@mail.com",
        login: "user2",
        id: 2
    },
    {
        sername: "Сергеев",
        name: "Григорий",
        fatherName: "Викторович",
        email: "mail3@mail.com",
        login: "user3",
        id: 3
    },
    {
        sername: "Федоров",
        name: "Виктор",
        fatherName: "Федорович",
        email: "mail4@mail.com",
        login: "user4",
        id: 4
    },
    {
        sername: "Хвастунов",
        name: "Сергей",
        fatherName: "Петрович",
        email: "mail5@mail.com",
        login: "user5",
        id: 5
    },
    {
        sername: "Григорьев",
        name: "Федор",
        fatherName: "Григорьевич",
        email: "mail6@mail.com",
        login: "user6",
        id: 6
    }
];

export const UsersTableContainer = () => {
    let user = {
        sername: "Григорьев",
        name: "Федор",
        fatherName: "Григорьевич",
        email: "mail6@mail.com",
        login: "user6",
        id: 6
    }
    const [users, setUsers] = useState(initUsers);

    const AddUserHandler = (newUser) => {
        setUsers([
            ...users,
            {
                sername: newUser.sername,
                name: newUser.name,
                fatherName: newUser.fatherName,
                email: newUser.email,
                login: newUser.login,
                id: 7
            }
        ]);
    };

    const UpdateUserHandler = (upUserData, userId) => {
        setUsers(
            users.map((u, i) => {
                if (u.id === userId) {
                    return (u[i] = upUserData);
                }
                return u;
            })
        );
    };

    const DeleteUserHandler = (userId) => {
        setUsers(users.filter((u) => u.id !== userId));
    };

    //активация модальных окон
    const [updateModalActive, setUpdateModalActive] = useState(false);
    const [createModalActive, setCreateModalActive] = useState(false);
    const [deleteModalActive, setDeleteModalActive] = useState(false);
    //актуальный userId
    const [currentUserId, setCurrentUserId] = useState("")


    return (
        <>
            <ModalWindowTable user={user} modalTitle={"Создание пользователя"}/>
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
};
