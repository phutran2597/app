

const InputBoxWrapper = ({ data, children }) => {
    return (
        <label htmlFor={data.id} className='block'>
            <span className="text-gray-700">{data.label}</span>
            {children}
        </label>
    )
}

const InputBox = ({ onChange, data }) => {
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        onChange(name, value);
    }
    
    switch (data.type) {
        case 'inputText':
            return (
                <InputBoxWrapper data={data}>
                    <input type="text" onChange={handleInputChange} name={data.name} id={data.id} className="mt-1 block w-full rounded-md border-gray-300 focus:border-main focus:ring-main focus:ring-opacity-50" />
                </InputBoxWrapper>
            )
            break;
        case 'password':
            return (
                <InputBoxWrapper data={data}>
                    <input type="password" onChange={handleInputChange} name={data.name} id={data.id} className="mt-1 block w-full rounded-md border-gray-300 focus:border-main focus:ring-main focus:ring-opacity-50" />
                </InputBoxWrapper>
            );
            break;
    }
}

export default InputBox