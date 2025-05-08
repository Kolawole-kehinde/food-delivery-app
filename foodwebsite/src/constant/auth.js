export const RegisterLists = [
    {
        type: "text",
        name: "username",
        placeholder: "Username"
    },
    {
        type: "email",
        name: "email",
        placeholder: "Email"
    },
    {
        type: "select",
        name: "gender",
        placeholder: "Select Gender",
        options: [
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]
    },
    {
        type: "password",
        name: "password",
        placeholder: "Password"
    },
    {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password"
    },
];

export const LoginLists = [
    {
        type: "email",
        name: "email",
        placeholder: "Email"
    },
    {
        type: "password",
        name: "password",
        placeholder: "Password"
    },
];


export const changePasswordFields = [
    {
      type: "password",
      name: "currentPassword",
      placeholder: "Current Password",
      label: "Current Password",
    },
    {
      type: "password",
      name: "newPassword",
      placeholder: "New Password",
      label: "New Password",
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm New Password",
      label: "Confirm New Password",
    },
  ];
  
