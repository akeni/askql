export = (
  <ask args={<list />}>
    <let
      name="a"
      type={<ref name="any" />}
      value={
        <call
          name="+"
          args={
            <list>
              <call
                name="+"
                args={
                  <list>
                    <call
                      name="+"
                      args={
                        <list>
                          <call
                            name="+"
                            args={
                              <list>
                                <call
                                  name="+"
                                  args={
                                    <list>
                                      <call
                                        name="+"
                                        args={
                                          <list>
                                            {1}
                                            <call
                                              name="*"
                                              args={
                                                <list>
                                                  {2}
                                                  {3}
                                                </list>
                                              }
                                              isOperator={true}
                                            />
                                          </list>
                                        }
                                        isOperator={true}
                                      />
                                      <call
                                        name="*"
                                        args={
                                          <list>
                                            <call
                                              name="*"
                                              args={
                                                <list>
                                                  {4}
                                                  {5}
                                                </list>
                                              }
                                              isOperator={true}
                                            />
                                            {6}
                                          </list>
                                        }
                                        isOperator={true}
                                      />
                                    </list>
                                  }
                                  isOperator={true}
                                />
                                {7}
                              </list>
                            }
                            isOperator={true}
                          />
                          {8}
                        </list>
                      }
                      isOperator={true}
                    />
                    {9}
                  </list>
                }
                isOperator={true}
              />
              <call
                name="*"
                args={
                  <list>
                    {10}
                    {11}
                  </list>
                }
                isOperator={true}
              />
            </list>
          }
          isOperator={true}
        />
      }
    />
    <call
      name="/"
      args={
        <list>
          <ref name="a" />
          {3}
        </list>
      }
      isOperator={true}
    />
  </ask>
);
