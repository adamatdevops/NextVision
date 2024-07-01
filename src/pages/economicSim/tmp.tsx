{state.childrenData.map((child, childIndex) => (
    <div key={child.id}>
        {child.educationLevel === 'כן' && (
        <Form.Item
            label={`טיפול מיוחד לילד ${childIndex + 1}`}
            labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
            wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
        >
        <InputNumber
            value={state.futureEducationPersonalCareExpenses[childIndex] || 0}
            onChange={(value) => handleFutureKindergartenExpensesChange(childIndex, value)}
            min={0}
            style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
        />
        <Tooltip title="מידע על הוצאות טיפול מיוחד ילדים">
            <Button
                type="link"
                icon={<InfoCircleOutlined />}
                onClick={() => showDrawer('futureEducationPersonalCareExpenses')}
            />
        </Tooltip>
    </Form.Item>
)}
{state.childrenData.map((child, childIndex) => (
    <div key={child.id}>
        {child.futureEducationDayCareExpenses === 'כן' && (
        <Form.Item
            label={`צהרון לילד ${childIndex + 1}`}
            labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
            wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
        >
        <InputNumber
            value={state.futureEducationDayCareExpenses[childIndex] || 0}
            onChange={(value) => handleFutureKindergartenExpensesChange(childIndex, value)}
            min={0}
            style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
        />
        <Tooltip title="מידע על הוצאות צהרון">
            <Button
                type="link"
                icon={<InfoCircleOutlined />}
                onClick={() => showDrawer('futureEducationDayCareExpenses')}
            />
        </Tooltip>
    </Form.Item>
)}