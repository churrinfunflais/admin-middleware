import React, { Component } from 'react';
import { Table, IconArrowUp, IconArrowDown, IconClock, IconEdit, IconWarning, IconDelete, Tag, Button, ButtonWithIcon } from "vtex.styleguide";
import faker from 'faker';

const EXAMPLE_LENGTH = 5
const MOCKED_DATA = [...Array(EXAMPLE_LENGTH)].map(() => (
  {
    entity: faker.name.findName(),
    type: faker.address.streetAddress(),
    status: faker.commerce.color(),
    format: faker.system.mimeType()
  })
)

const initialState = {
  items: MOCKED_DATA,
  searchValue: null,
  slicedData: MOCKED_DATA.slice(0, EXAMPLE_LENGTH),
}

export default class Settings extends Component {
  constructor(props: any) {
    super(props)
    this.state = initialState

    this.handleInputSearchChange = this.handleInputSearchChange.bind(this)
    this.handleInputSearchSubmit = this.handleInputSearchSubmit.bind(this)
    this.handleInputSearchClear = this.handleInputSearchClear.bind(this)
  }

  handleInputSearchChange(e: any) {
    this.setState({ searchValue: e.target.value })
  }

  handleInputSearchClear(e: any) {
    this.setState({ ...initialState })
  }

  handleInputSearchSubmit(e: any) {
    const value = e && e.target && e.target.value
    const regex = new RegExp(value, 'i')
    if (!value) {
      this.setState({ ...initialState })
    } else {
      this.setState({
        slicedData: initialState.slicedData
          .slice()
          .filter(item => regex.test(item.entity) || regex.test(item.format) || regex.test(item.type)),
      })
    }
  }

  private getSchema() {
    return {
      properties: {
        io: {
          title: ' ',
          width: 50,
          cellRenderer: ({ cellData }: any) => {
            return cellData === 'inbound' ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />
          }
        },
        entity: {
          title: 'Entity',
        },
        type: {
          title: 'Type',
          width: 50,
          cellRenderer: ({ cellData }: any) => {
            return cellData === 'time' ? <IconClock size={14} /> : <IconWarning size={14} />
          }
        },
        format: {
          title: 'Format'
        },
        status: {
          title: 'Status',
          cellRenderer: ({ cellData }: any) => {
            const status = cellData !== 'active' ? 'success' : 'neutral'
            return <Tag type={status}>Active</Tag>
          },
        },
        edit: {
          width: 60,
          title: ' ',
          cellRenderer: ({ cellData }: any) => {
            return <ButtonWithIcon icon={<IconEdit />} variation="tertiary" />
          }
        },
        delete: {
          width: 60,
          title: ' ',
          cellRenderer: ({ cellData }: any) => {
            return <ButtonWithIcon icon={<IconDelete />} variation="tertiary" />
          }
        }
      }
    }
  }

  public render() {
    const { items, searchValue, slicedData }: any = this.state
    return (
      <div>
        <Table
          fullWidth
          items={slicedData}
          schema={this.getSchema()}
          toolbar={{
            inputSearch: {
              value: searchValue,
              placeholder: 'Search ...',
              onChange: this.handleInputSearchChange,
              onClear: this.handleInputSearchClear,
              onSubmit: this.handleInputSearchSubmit,
            },
            newLine: {
              label: 'New',
              handleCallback: () => alert('handle new line callback'),
            },
          }}
          emptyStateChildren={
            <React.Fragment>
              <p>
                There are no entity configurations for your account, please add a new one to start the transactions flow or contact your sales representative.
              </p>
              <div className="pt5">
                <Button variation="secondary" size="small">
                  <span className="flex align-baseline">New settings</span>
                </Button>
              </div>
            </React.Fragment>
          }
        />
      </div>
    )
  }
}