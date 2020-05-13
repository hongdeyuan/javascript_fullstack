## formik 使用
    create-react-app formik_demo1
    
    //清理 缓存 npm cache clean --force

    npm i formik --save 
		yarn add yup // 用于校验

## Formik

### props
- component?: React.ComponentType<FormikProps<Values>>

- render: (props: FormikProps<Values>) => ReactNode
- children?: React.ReactNode | (props: FormikProps<Values>) => ReactNode
- enableReinitialize?: boolean
- isInitialValid?: boolean
- initialErrors?: FormikErrors<Values>
- initialStatus?: any
- initialTouched?: FormikTouched<Values>
- initialValues: Values
- onReset?: (values: Values, formikBag: FormikBag) => void
- onSubmit: (values: Values, formikBag: FormikBag) => void | Promise<any>
- validate?: (values: Values) => FormikErrors<Values> | Promise<any>
- validateOnBlur?: boolean
- validateOnChange?: boolean
- validateOnMount?: boolean
- validationSchema?: Schema | (() => Schema)

### 表单提交
- 提交阶段: 
  需要理解的props的两方法：handleSubmit 和 submitForm
- 预提交
	1. initialValues是必需的
	2. 设置isSubmitting于true （默认为true）

- 验证方式
	1. 设置isValidating于true
	2. 运行所有字段级别的验证validate
	3. 有没有错误？
		- 是：中止提交。设置isValidating为false，设置为errors，设置isSubmitting为false
		- 否：设置isValidating为false，继续“提交”